import {Connection} from "../../src"

export async function sqlTest(conn:Connection):Promise<void> {

	var isResult = await conn.execute("insert into test(id, name) values(1,'a')");
	expect(conn.getUpdateCount()).toBe(1);
	isResult = await conn.execute("insert into test(id, name) values(?,?)", [2,'b']);
	expect(conn.getUpdateCount()).toBe(1);

	isResult = await conn.execute("insert into test(id, name) values(3,'c')");
	expect(conn.getUpdateCount()).toBe(1);

	var resultSet = await conn.executeQuery('select * from test');
	expect(resultSet.length).toBe(3);
	expect(resultSet[0].id).toBe(1);
	expect(resultSet[1].id).toBe(2);

	resultSet = await conn.executeQuery('select * from test where id=?',[1]);
	expect(resultSet.length).toBe(1);
	expect(resultSet[0].id).toBe(1);

	isResult = await conn.execute("delete from test");
	expect(conn.getUpdateCount()).toBe(3);
	return;
}
export async function transactionTest(conn:Connection):Promise<void> {
	await transactionCommit(conn);
	await transactionRollback(conn);

}
export async function transactionRollback(conn:Connection):Promise<void> {
	await conn.setAutoCommit(true);
	var isResult = await conn.execute("delete from test");
	await conn.setAutoCommit(false);
	isResult = await conn.execute("insert into test(id, name) values(1,'a')");
	await conn.rollback();
	isResult = await conn.execute('select * from test');
	expect(conn.getResultSet().length).toBe(0);
	return;
}

export async function transactionCommit(conn:Connection):Promise<void> {
	await conn.setAutoCommit(true);
	var isResult = await conn.execute("delete from test");
	await conn.setAutoCommit(false);
	isResult = await conn.execute("insert into test(id, name) values(1,'a')");
	await conn.commit();
	isResult = await conn.execute('select * from test');
	expect(conn.getResultSet().length).toBe(1);
	return;
}