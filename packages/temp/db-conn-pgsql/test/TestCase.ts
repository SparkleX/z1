import { Connection } from "db-conn";
import {expect} from 'chai'

export async function sqlTest(conn:Connection):Promise<void> {
	var isResultSet:boolean ;
	try {
		await conn.execute('drop table test');
	}catch(e) {
		//console.log(e);
	}
	let sql:string  = 'CREATE TABLE test(id integer NOT NULL,name character varying(128),PRIMARY KEY (id))';
	isResultSet = await conn.execute(sql);
	expect(isResultSet).to.equal(false);
	isResultSet = await conn.execute("insert into test(id, name) values(1,'a')");
	expect(conn.getUpdateCount()).to.equal(1);
	isResultSet = await conn.execute("insert into test(id, name) values($1,$2)", [2,'b']);
	expect(conn.getUpdateCount()).to.equal(1);
	isResultSet = await conn.execute("insert into test(id, name) values(3,'c')");
	expect(conn.getUpdateCount()).to.equal(1);
	isResultSet = await conn.execute('select * from test');
	const resultSet = conn.getResultSet();
	expect(resultSet.length).to.equal(3);
	expect(resultSet[0].id).to.equal(1);
	expect(resultSet[1].id).to.equal(2);
	return;
}
export async function transactionTest(conn:Connection):Promise<void> {
	await transactionCommit(conn);
	await transactionRollback(conn);

}
export async function transactionRollback(conn:Connection):Promise<void> {
	var isResultSet:boolean ;
	await conn.setAutoCommit(true);
	isResultSet = await conn.execute("delete from test");
	await conn.setAutoCommit(false);
	isResultSet = await conn.execute("insert into test(id, name) values(1,'a')");
	await conn.rollback();
	const result = await conn.executeQuery('select * from test');
	expect(result.length).to.equal(0);
	return;
}

export async function transactionCommit(conn:Connection):Promise<void> {
	var isResultSet:boolean ;
	await conn.setAutoCommit(true);
	isResultSet = await conn.execute("delete from test");
	await conn.setAutoCommit(false);
	isResultSet = await conn.execute("insert into test(id, name) values(1,'a')");
	await conn.commit();
	const result = await conn.executeQuery('select * from test');
	expect(result.length).to.equal(1);
	return;
}