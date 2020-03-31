import {ConnectionPool, Connection} from "../../src"
import {SqlJsConnectionPool, initSqlJs} from "../../src"
import {sqlTest} from "./TestCase"


test(__filename, async () => {
		var SQL = await initSqlJs();
		let pool:ConnectionPool = new SqlJsConnectionPool();
		await pool.open(SQL);
		var conn0:Connection = await pool.getConnection();
		var conn1:Connection = await pool.getConnection();
		await conn0.execute("create table test (id integer primary key, name)");			
		await sqlTest(conn0);
		await sqlTest(conn1);
		await conn0.close();
		await conn1.close();
		await pool.close();
    }, 20000);
