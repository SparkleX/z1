import { SqlJsDdlBuilder, SqlJsConnection,initSqlJs } from "db-conn-sqljs";
import { Connection,DdlBuilder, Metadata, MdTable } from "db-conn"

import * as fs from 'fs'

export async function initDatabase() {
	
	var SQL = await initSqlJs();
	var conn:Connection = new SqlJsConnection();
	conn.open(SQL);

	(global as any).conn = conn;
	var ddlBuilder:DdlBuilder = new SqlJsDdlBuilder();


	
	let dir = "node_modules/z1-domain/domain/";

	var metadata = await Metadata.loadAll(dir);
	global['metadata'] = metadata;

	//let files= fs.readdirSync(dir);	
	for(var tableName in metadata.tables) {
		var table = metadata.tables[tableName];
		//var table:MdTable = await Metadata.load(`${dir}/${file}`);
		var ddlBuilder:DdlBuilder = new SqlJsDdlBuilder();
		var sqls = ddlBuilder.createTable(table);
		await conn.execute(sqls[0]);
	};


	
	dir = "data";
	var files= fs.readdirSync(dir);	
	for(let file of files) {
		let rawdata = fs.readFileSync(`${dir}/${file}`).toString();
		let table:MdTable = metadata.tables[file.split(".")[0]];
		var sql = ddlBuilder.insertSql(table);
		var data = JSON.parse(rawdata);
		var paramsArray = ddlBuilder.insertData(table, data);
		for(let param of paramsArray) {
			await conn.execute(sql, param);
		}
	};
}