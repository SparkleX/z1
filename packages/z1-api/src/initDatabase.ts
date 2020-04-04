import { SqlJsDdlBuilder, SqlJsConnection,initSqlJs, ConnectionPool, SqlJsConnectionPool } from "sparkle-core";
import { Connection,DdlBuilder, Metadata, Table} from "sparkle-core";

import * as fs from 'fs'

export async function initDatabase(): Promise<ConnectionPool> {
	var SQL = await initSqlJs();
	let pool: ConnectionPool = new SqlJsConnectionPool();
	pool.open(SQL);

	var conn: Connection = await pool.getConnection();

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
		let table: Table = metadata.tables[file.split(".")[0]];
		var sql = ddlBuilder.insertSql(table);
		var data = JSON.parse(rawdata);
		var paramsArray = ddlBuilder.insertData(table, data);
		for(let param of paramsArray) {
			await conn.execute(sql, param);
		}
	};


	return pool;
}