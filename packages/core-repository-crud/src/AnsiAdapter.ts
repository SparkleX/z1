import { CrudRepositoryAdapter } from './CrudRepositoryAdapter';
import {Metadata} from "db-conn"

export class AnsiAdapter implements CrudRepositoryAdapter {
	getColumns(TName: string, data:object): string[] {
		var rt = [];
		for(var key in data) {
			rt.push(key as string);
		}
		return rt ;
	}
	getIdColumns(tableName:string): string[] {
		var metadata:Metadata = global['metadata'];
		var rt = metadata.tables[tableName].primaryKey;
		return rt;
	}
	getQuote() {
		return '"';
	}
	getTableName(typeName:string): string {
		return typeName;
	}
	getValues(data:object, columns:string[]): any[]{
		var rt = [];
		for(let col of columns) {
			rt.push(data[col]);
		}
		return rt;
	}
}
 