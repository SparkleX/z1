import {controller, httpGet, httpPut, httpPost, httpDelete, requestParam, request, response} from "inversify-express-utils";
import { BaseService } from "z1-service/dist/BaseService";
import { injectable } from "inversify";
import { Container } from "inversify";
import {Request, Response} from "express"
import { OCRDService } from "z1-service";

import * as services from "z1-service";

@injectable()
export class BaseController<
    TService extends BaseService<any, T>, 
    //REPO extends CrudRepository<T,ID>, 
    T extends object>{
  
	service:TService;

	protected getTableName() {
        return this.constructor.name.substr(0,4);        
	}

	public constructor() {
		var container:Container = (global as any).container as Container;
		var serviceName = this.getTableName() + "Service";
		var service = (services as any)[serviceName];
	   	this.service = container.get<TService>(service);
	}
	@httpGet("/")
    public async findAll(@response() res: Response): Promise<any> {
		var data = await this.service.findAll();
		res.status(200).json(data);
	}
	
    @httpGet("/:id")
    public async getById(@requestParam("id") id:string, @response() res: Response): Promise<void> {
		var data =  await this.service.getById(id);
		res.status(200).json(data);
    }
    @httpPost("/")
    public async create(@request() req:Request, @response() res: Response): Promise<void> {
		try {
			var data = await this.service.create(req.body);
			res.status(201).json(data);
		}catch(e) {
			res.status(500).json(e.message);
		}
    }
    @httpPut("/:id")
    public async update(@requestParam("id") id:string, @request() req:Request, @response() res: Response): Promise<void> {
		await this.service.update(id, req.body);
		res.status(204).end();		 
    }
    @httpDelete("/:id")
    public async delete(@requestParam("id") id:string, @response() res: Response): Promise<void> {
		await this.service.delete(id);
		res.status(204).end();
    }
}