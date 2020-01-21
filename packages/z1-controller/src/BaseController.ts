import {controller, httpGet, httpPut, httpPost, httpDelete} from "inversify-express-utils";
import { BaseService } from "z1-service/dist/BaseService";

@controller("/api")
export class BaseController<
    TService extends BaseService<any, T,ID>, 
    //REPO extends CrudRepository<T,ID>, 
    T extends object,ID>{
  
    service:TService;
    @httpGet("/:id")
    public async getById(id:ID): Promise<any> {
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