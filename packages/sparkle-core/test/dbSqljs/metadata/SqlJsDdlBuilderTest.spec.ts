import { Connection,DdlBuilder, Metadata, MdTable } from "../../../src";
import { SqlJsDdlBuilder, SqlJsConnection,initSqlJs } from "../../../src";
import * as fs from 'fs';

test("SqlJsDdlBuilder.createTable", async () => {
	var SQL = await initSqlJs();
	var conn:Connection = new SqlJsConnection();
	conn.open(SQL);
	var table:MdTable = await Metadata.load(`${__dirname}/table/Exam.table.json`);
	var ddlBuilder:DdlBuilder = new SqlJsDdlBuilder();
	var sqls = ddlBuilder.createTable(table);
	await conn.execute(sqls[0]);

	var sql = ddlBuilder.insertSql(table);
	console.dir(sql);
	let rawdata = fs.readFileSync(`${__dirname}/data/Exam.data.json`).toString();
	var data = JSON.parse(rawdata);
	var paramsArray = ddlBuilder.insertData(table, data);
	for(let param of paramsArray) {
		await conn.execute(sql, param);
	}
	var listExam = await conn.executeQuery("select * from Exam");
	expect(listExam.length).toBe(2);
	//expect(listExam).toBe(data);
});
