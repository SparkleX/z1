import "reflect-metadata"
import { injectable, postConstruct } from "inversify";
import { ClsExpress } from "../clsHook/ClsExpress";
import { Connection } from "../db/Connection";
import { Result } from "../db/Result";

@injectable()
export abstract class SqlRepository<T, ID>{
	static quote:string = '"';
	protected tableName: string;

	@postConstruct()
	public postConstruct() {
		var name = this.constructor.name;
		if(name.endsWith("Repo") == false) {
			throw `${name} is not endwith "Repo"`;
		}
		this.tableName = name.substr(0, name.length - "Repo".length);
	}
	public async findAll():Promise<T[]> {
		
		var sql = `select * from ${SqlRepository.quote}${this.tableName}${SqlRepository.quote}`;
		console.log(sql);
		var result = await this.execute(sql);
		return result.data;
	}
	/*private execute(sql:string, param?: any[]):any {
		let p1: CallbackFuncData = {    
			metadata: sql,
			target : this,
		};
		//var list = SqlRepository.callbackFunction(p1, param);
		//return list;
	}*/
	protected async execute(sql: string, param?: any[]): Promise<Result> {
		var conn: Connection = await ClsExpress.Default.getConnection();
		return conn.execute(sql, param);
	}

	public async findByKey(id:ID):Promise<T> {
		var columns:string[] = this.getIdColumns();
		var condition = this.sqlKeys(columns);
		var sql = `select * from ${SqlRepository.quote}${this.tableName}${SqlRepository.quote} where ${condition}`;
		console.log(sql);
		var result: Result = await this.execute(sql, [id]);
		if(result.data.length==0) {
			return null;
		}
		return result.data[0];
	}
	public async delete(id: ID):Promise<void>{
		var columns:string[] = this.getIdColumns();
		var condition = this.sqlKeys(columns);
		var sql = `delete from ${SqlRepository.quote}${this.tableName}${SqlRepository.quote} where ${condition}`;
		console.log(sql);
		await this.execute(sql, [id]);
	}		
	private sqlKeys(columns: string[]) {
		var rt = "";
		for(let col of columns) {
			rt = rt  + `${SqlRepository.quote}${col}${SqlRepository.quote}=? and`;
		}
		var sql = rt.substr(0, rt.length-4);
		return sql;
	}
	public async insert(data:T):Promise<void>{
		var columns:string[] = this.getColumns(data);
		var values = this.getValues(data, columns);
		var sqlInsertColumns = this.sqlInsertColumns(columns);
		var sqlInsert = this.sqlInsert(columns);
		var sql = `insert into ${SqlRepository.quote}${this.tableName}${SqlRepository.quote}(${sqlInsertColumns}) values(${sqlInsert})`;
		console.log(sql);
		await this.execute(sql, values);
	}
	private sqlInsertColumns(columns: string[]) {
		var rt = "";
		for(let col of columns) {
			rt = rt  + `${SqlRepository.quote}${col}${SqlRepository.quote},`;
		}
		var sql = rt.substr(0, rt.length-1);
		return sql;
	}	
	private sqlInsert(columns: string[]) {
		var rt = "";
		for(let col of columns) {
			rt = rt  + `?,`;
		}
		var sql = rt.substr(0, rt.length-1);
		return sql;
	}
	public async update(data:T):Promise<void> {
		return this.updateByKey(data as any, data);
	}
	public async updateByKey(id:ID, data:T):Promise<void>{
		var columns:string[] = this.getColumns(data);
		var values = this.getValues(data, columns);
		var sqlUpdate = this.sqlUpdate(columns);
		var idColumns:string[] = this.getIdColumns();
		var sqlWhere = this.sqlKeys(idColumns);
		var sql = `update ${SqlRepository.quote}${this.tableName}${SqlRepository.quote} set ${sqlUpdate} where ${sqlWhere}`;
		console.log(sql);
		values.push(id);
		await this.execute(sql, values);
	}
	private sqlUpdate(columns: string[]) {
		var rt = "";
		for(let col of columns) {
			rt = rt  + `${SqlRepository.quote}${col}${SqlRepository.quote}=?,`;
		}
		var sql = rt.substr(0, rt.length-1);
		return sql;
	}
	protected getColumns(data: T): string[] {
		var columns :string[] = [];
		for(let key in data) {
			columns.push(key);
		}
//		var metadata:Metadata = global['metadata'];
//		var rt = metadata.tables[tableName].primaryKey;
		return columns;
	}
	protected getValues(data:T, columns:string[]): any[]{
		var rt = [];
		for(let col of columns) {
			rt.push((data as any)[col]);
		}
		return rt;
	}	
	protected getIdColumns(): string[] {
		//var metadata:Metadata = global['metadata'];
		//var rt = metadata.tables[tableName].primaryKey;
		//return rt;
		return ["id"];
	}	
}