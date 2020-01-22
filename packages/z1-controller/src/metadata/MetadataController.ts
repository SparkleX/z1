import {controller, httpGet, requestParam} from "inversify-express-utils";
import {Metadata} from "db-conn"

@controller("/api")
export class MetadataController{  
  	@httpGet("/table/:tableName")
	public async getTable(@requestParam("tableName") tableName:string): Promise<any> {
		var metadata:Metadata = (global as any)['metadata'];
		var rt = metadata.tables[tableName];
		return rt;
	}
	@httpGet("/table")
	public async getTables(): Promise<any> {
		var metadata:Metadata = (global as any)['metadata'];
		return metadata.tables;
	}	
}