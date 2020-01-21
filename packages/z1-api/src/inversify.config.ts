import { Container,interfaces } from "inversify";
import { Types} from "./Types"
import {OCRDService,OITMService, ORDRService} from "z1-service"
import { OITMRepository, OCRDRepository, ORDRRepository } from "z1-repository";
import { RepositoryFactory, RepositoryHandler } from "core-repository";
import { AnsiAdapter, CrudRepositoryAdapter } from "core-repository-crud";
import { OITM } from "z1-domain";
import { Connection } from 'db-conn';



class RepoHandlerImpl implements RepositoryHandler {
    async execute(sql: string, ...params: any): Promise<any> {
		var conn:Connection = (global as any).conn;
		return await conn.executeQuery(sql, params);
    }
}

let adapter:CrudRepositoryAdapter = new AnsiAdapter();

let repoHandlerImpl = new RepoHandlerImpl();

const container = new Container();

container.bind<OCRDService>(Types.OCRDService).to(OCRDService);
container.bind<OITMService>(Types.OITMService).to(OITMService);
container.bind<ORDRService>(Types.ORDRService).to(ORDRService);

container.bind<OITMRepository>(Types.OITMRepository).to(OITMRepository).onActivation( 
    (context, repo) => {
	   // var proxyRepo = RepositoryFactory.newRepository(OITMRepository, repoHandlerImpl);
	   var repoStudent:OITMRepository = new OITMRepository();
	   repoStudent.postConstruct(repoHandlerImpl, adapter, OITM);
        return repoStudent;
    }
);

container.bind<OCRDRepository>(Types.OCRDRepository).to(OCRDRepository).onActivation( 
    (context, repo) => {
        var proxyRepo = RepositoryFactory.newRepository(OCRDRepository, repoHandlerImpl);
        return proxyRepo;
    }
);

container.bind<ORDRRepository>(Types.ORDRRepository).to(ORDRRepository).onActivation( 
    (context, repo) => {
        var proxyRepo = RepositoryFactory.newRepository(ORDRRepository, repoHandlerImpl);
        return proxyRepo;
    }
);

export { container };
global['container'] = container;
