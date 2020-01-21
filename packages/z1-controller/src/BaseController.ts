import {controller, httpGet, httpPut, httpPost, httpDelete, requestParam} from "inversify-express-utils";
import { BaseService } from "z1-service/dist/BaseService";
import { injectable } from "inversify";
import { Container } from "inversify";

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
    public async create(data:T): Promise<any> {
        return await this.service.create(data);

    }
    @httpPut("/:id")
    public async update(id:ID, data:T): Promise<any> {
        return await this.service.update(id, data);

    }
    @httpDelete("/:id")
    public async delete(id:ID): Promise<any> {
        return await this.service.delete(id);
    }
}