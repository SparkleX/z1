import { SqlJsDdlBuilder, SqlJsConnection,initSqlJs } from "db-conn-sqljs"
import * as fs from 'fs'

export async function  initDatabase() {
	var SQL = await initSqlJs();
	var conn:Connection = new SqlJsConnection();
	conn.open(SQL);
	var table:MdTable = await Metadata.load("node_modules/z1-domain/table/Exam.json");
	var ddlBuilder:DdlBuilder = new SqlJsDdlBuilder();
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
	//var listExam = await conn.executeQuery("select * from Exam");
}