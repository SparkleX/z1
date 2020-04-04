import { Connection,DdlBuilder, Metadata, MdTable } from "db-conn"
import { PgDdlBuilder, PgConnection } from "../../src/index"
import * as fs from 'fs'
test("SqlJsDdlBuilder.createTable", async () => {
	const config = {
		user: "postgres",
		password: "1234",
		host: 'localhost',
		port: 5432,
		database: 'test'
		};		
	var conn:Connection = new PgConnection();
	await conn.open(config);
	var table:MdTable = await Metadata.load("test/metadata/table/Exam.json");
	var ddlBuilder:DdlBuilder = new PgDdlBuilder();
	var sqls = ddlBuilder.createTable(table);
	await conn.execute(sqls[0]);

	var sql = ddlBuilder.insertSql(table);
	console.dir(sql);
	let rawdata = fs.readFileSync("test/metadata/data/Exam.data.json").toString();
	var data = JSON.parse(rawdata);
	var paramsArray = ddlBuilder.insertData(table, data);
	for(let param of paramsArray) {
		await conn.execute(sql, param);
	}
	var listExam = await conn.executeQuery("select * from Exam");
	chai.expect(listExam.length).to.equals(2);
	chai.expect(listExam).to.eql(data);
});
