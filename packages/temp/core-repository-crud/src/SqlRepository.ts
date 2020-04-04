import "reflect-metadata"
import { injectable } from "inversify";
import { CallbackFunc, CallbackFuncData } from "core-repository"

@injectable()
export abstract class SqlRepository<T, ID>{
	static callbackFunction: CallbackFunc;
	static quote:string = '"';
	protected TName: string;
	/*public postConstruct(x : new () => T) {
		this.TName = x.name;
		this.table = this.adapter.getTableName(this.TName);
	}*/
	public async findAll():Promise<T[]> {
		
		var sql = `select * from ${SqlRepository.quote}${this.getTableName()}${SqlRepository.quote}`;
		console.log(sql);
		var list = this.execute(sql);
		return list;
	}
	private execute(sql:string, param?: any[]):any {
		let p1: CallbackFuncData = {    
			metadata: sql,
			target : this,
		};
		var list = SqlRepository.callbackFunction(p1, param);
		return list;
	}
	public async findByKey(id:ID):Promise<T> {
		var columns:string[] = this.getIdColumns();
		var condition = this.sqlKeys(columns);
		var sql = `select * from ${SqlRepository.quote}${this.getTableName()}${SqlRepository.quote} where ${condition}`;
		console.log(sql);
		var list = await this.execute(sql, [id]) as any;
		if(list.length==0) {
			return null;
		}
		return list[0];
	}
	public async delete(id: ID):Promise<void>{
		var columns:string[] = this.getIdColumns();
		var condition = this.sqlKeys(columns);
		var sql = `delete from ${SqlRepository.quote}${this.getTableName()}${SqlRepository.quote} where ${condition}`;
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
		var sql = `insert into ${SqlRepository.quote}${this.getTableName()}${SqlRepository.quote}(${sqlInsertColumns}) values(${sqlInsert})`;
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
		var sql = `update ${SqlRepository.quote}${this.getTableName()}${SqlRepository.quote} set ${sqlUpdate} where ${sqlWhere}`;
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
			rt.push(data[col]);
		}
		return rt;
	}	
	protected getIdColumns(): string[] {
		//var metadata:Metadata = global['metadata'];
		//var rt = metadata.tables[tableName].primaryKey;
		//return rt;
		return ["id"];
	}	
	private getTableName(): string{
		return this.TName;
	}
}