import {controller, httpGet, requestParam} from "inversify-express-utils";
import {Metadata, Table} from "sparkle-core"

@controller("/api")
export class MetadataController{  
	@httpGet("/table")
	public async getTables(): Promise<{[key: string]: Table}> {
		var metadata: Metadata = (global as any)['metadata'];
		return metadata.tables;
	}	
}