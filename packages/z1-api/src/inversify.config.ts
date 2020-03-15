import { Container,interfaces } from "inversify";
import { OITM,OCRD,ORDR } from "z1-domain";
import { Connection } from 'db-conn';

import * as entries from "./Entries";
import {autoProvide, buildProviderModule} from "inversify-binding-decorators";




const container = new Container();
for (const key in entries) {
	autoProvide(container, (entries as any)[key]);
}
container.load(buildProviderModule());
export {container}
global['container'] = container
/*

class RepoHandlerImpl implements RepositoryHandler {
    async execute(sql: string, params?: any[]): Promise<any> {
		var conn:Connection = (global as any).conn;
		return await conn.executeQuery(sql, params);
    }
}

let adapter:CrudRepositoryAdapter = new AnsiAdapter();

let repoHandlerImpl = new RepoHandlerImpl();


container.bind<OCRDService>(Types.OCRDService).to(OCRDService);
container.bind<OITMService>(Types.OITMService).to(OITMService);
container.bind<ORDRService>(Types.ORDRService).to(ORDRService);

container.bind<OITMRepository>(Types.OITMRepository).to(OITMRepository).onActivation( 
    (context, repo) => {
	   var repoStudent:OITMRepository = new OITMRepository();
	   repoStudent.postConstruct(repoHandlerImpl, adapter, OITM);
        return repoStudent;
    }
);

container.bind<OCRDRepository>(Types.OCRDRepository).to(OCRDRepository).onActivation( 
    (context, repo) => {
		var repoStudent:OCRDRepository = new OCRDRepository();
		repoStudent.postConstruct(repoHandlerImpl, adapter, OCRD);        
		return repoStudent;
    }
);

container.bind<ORDRRepository>(Types.ORDRRepository).to(ORDRRepository).onActivation( 
    (context, repo) => {
		var repoStudent:ORDRRepository = new ORDRRepository();
		repoStudent.postConstruct(repoHandlerImpl, adapter, ORDR);        
		return repoStudent;
    }
);

;*/
