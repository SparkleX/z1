import { inject, injectable } from "inversify";
import {controller,httpGet} from "inversify-express-utils";

import {RepositoryFactory, RepositoryHandler} from "core-repository"
import { BaseController } from "./BaseController";
import {OCRDService} from "z1-service"
import { OCRD } from "z1-domain";

class RepoHandlerImpl implements RepositoryHandler {
    execute(sql: string, ...params: any): Promise<any> {
		console.debug("Should be mocked");
        return new Promise<string>((resolve, reject) => { return resolve("123")});
    }
}

@controller("/api")
export class OCRDController extends BaseController<OCRDService, OCRD, String>{
  
  @httpGet("/test")
  public async test(): Promise<any> {
	//var orderRepository = RepositoryFactory.newRepository(SalesOrderRepository, new RepoHandlerImpl());
	//var data = await orderRepository.findByCode('123');
   // return data;
  }
}
