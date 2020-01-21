import {controller, httpGet, httpPut, httpPost, httpDelete, requestParam, request} from "inversify-express-utils";
import { BaseService } from "z1-service/dist/BaseService";
import { injectable } from "inversify";
import { Container } from "inversify";
import * as express from "express"

@injectable()
export class BaseController<
    TService extends BaseService<any, T,ID>, 
    //REPO extends CrudRepository<T,ID>, 
    T extends object,ID>{
  
	service:TService;

	protected getTableName() {
        return this.constructor.name.substr(0,4);        
	}

	public constructor() {
		var container:Container = (global as any).container as Container;
       	var serviceName = this.getTableName() + "Service";
       	this.service = container.get<TService>(serviceName);
   }
	@httpGet("/")
    public async findAll(): Promise<any> {
		return await this.service.findAll();
	}
	
    @httpGet("/:id")
    public async getById(@requestParam("id") id:ID): Promise<any> {
        return await this.service.getById(id);
    }
    @httpPost("/")
    public async create(@request() req:express.Request): Promise<any> {
        return await this.service.create(req.body);

    }
    @httpPut("/:id")
    public async update(@requestParam("id")id:ID, @request() req:express.Request): Promise<any> {
        return await this.service.update(id, req.body);

    }
    @httpDelete("/:id")
    public async delete(@requestParam("id") id:ID): Promise<any> {
        return await this.service.delete(id);
    }
}