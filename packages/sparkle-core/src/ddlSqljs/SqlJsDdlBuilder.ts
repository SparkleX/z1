import {DdlBuilder, MdTable, Property} from "../ddl";

export class SqlJsDdlBuilder implements DdlBuilder {
	private q = '';
	public createTable(mdTable: MdTable): string[] {
		var columns = "";
		for(let colName in mdTable.properties ) {
			columns = columns + `${colName},`;
		}
		columns = columns.substr(0, columns.length-1);
		var sql = `create table ${mdTable.title} (${columns})`
		return [sql];
	}	
	public insertSql(mdTable: MdTable): string {
		var columns = this.sqlInsertColumns(mdTable.properties);
		var values = this.sqlInsertParams(mdTable.properties);
		return `insert into ${mdTable.title} (${columns}) values (${values})`;
	}
	public insertData(mdTable: MdTable, data: object[]): any[][] {
		var rt:any[][] = [];
		for(let row of data) {
			var rowArray:any[] = [];
			for(let name in mdTable.properties ) {
				rowArray.push((row as any)[name]);
			}
			rt.push(rowArray);
		}
		return rt;
	}
	private sqlInsertColumns(columns: {[name:string]:Property}) {
		var rt = "";
		for(let name in columns) {
			rt = rt  + `${this.q}${name}${this.q},`;
		}
		var sql = rt.substr(0, rt.length-1);
		return sql;
	}	
	private sqlInsertParams(columns: {[name:string]:Property}) {
		var rt = "";
		for(let name in  columns) {
			rt = rt  + `?,`;
		}
		var sql = rt.substr(0, rt.length-1);
		return sql;
	}
}