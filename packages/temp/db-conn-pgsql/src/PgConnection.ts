import { Connection } from 'db-conn';
import { Client } from 'pg';
export class PgConnection implements Connection{

	private client: any;
	private resultSet:any[];
	private updateCount:number;

	public constructor(conn?:any) {
		this.client = conn;
	}
	public async open(config:any) : Promise<void> {
		this.client = new Client(config);
        await this.client.connect();
	}
	public async execute(sql: string, params?: any[]): Promise<boolean> {
		console.log(`PgConnection.execute: ${sql}`);
		var result = await this.client.query(sql, params);
		//console.dir(result);
		this.resultSet = result.rows;	
		this.updateCount = result.rowCount;
		return (result.command =="SELECT");
	}
	public async executeQuery(sql: string, params?: any[]): Promise<any[]> {
		await this.execute(sql, params);
		return this.getResultSet();
	}
	getUpdateCount(): number {
		return this.updateCount;
	}
	getResultSet(): any[] {
		return this.resultSet;
	}	
	public async close():Promise<void> {
		if(this.client.release) {
			await this.client.release();
		}
		else {
			await this.client.end();	
		}
	}
	async setAutoCommit(autoCommit:boolean): Promise<void> {
		if(autoCommit==false) {
			await this.client.query('BEGIN');
		}
	}
	async commit(): Promise<void> {
		await this.client.query('COMMIT');
	}
	async rollback(): Promise<void> {
		await this.client.query('ROLLBACK')
	}

}