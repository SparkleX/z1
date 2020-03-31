import {Connection, SqlJsConnection, initSqlJs} from "../../src"
import { sqlTest, transactionTest } from "./TestCase"

test("Metadata.loadAll", async () => {
		var SQL = await initSqlJs();
		var conn: Connection = new SqlJsConnection();
		await conn.open(SQL);
		await conn.execute("create table test (id integer primary key, name);");
		await sqlTest(conn);
		await transactionTest(conn);
		await conn.close();
});
