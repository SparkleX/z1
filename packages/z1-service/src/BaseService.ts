import { CrudRepository } from "core-repository-crud";
import { Container, injectable } from "inversify";

@injectable()
export class BaseService <TRepository extends CrudRepository<T,ID>, T extends object, ID> {
	repository:TRepository;

	public constructor(){
		var container:Container = (global as any).container as Container;
        var repoName = this.getTableName() + "Repository";
        this.repository = container.get<TRepository>(repoName);
    }
    protected getTableName() {
        return this.constructor.name.substr(0,4);        
    }
	public async findAll():Promise<T[]> {
        return await this.repository.findAll();
    }
    public async getById(id:ID):Promise<T> {
        return await this.repository.findById(id);
    }
    public async create(data:T):Promise<void> {
        return this.repository.insert(data);
    }
    public async update(id:ID, o:T):Promise<void> {
        return await this.repository.updateById(id, o);
    }

    public async delete(id:ID):Promise<void> {
        return await this.repository.deleteById(id);
    }
}