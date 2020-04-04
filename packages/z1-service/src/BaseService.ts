import { SqlRepository } from "sparkle-core";
import { BaseRepo } from "z1-repository";
import { Container, injectable ,postConstruct } from "inversify";
import * as repos from "z1-repository";

@injectable()
export class BaseService <TRepository extends BaseRepo<T>, T> {
	repository:TRepository;

    @postConstruct()
	public init(){
		var container:Container = (global as any).container as Container;
        var repoName = this.getTableName() + "Repository";
        var repoClass = (repos as any)[repoName]
        this.repository = container.get<TRepository>(repoClass);
    }
    protected getTableName() {
        return this.constructor.name.substr(0,4);        
    }
	public async findAll():Promise<T[]> {
        return await this.repository.findAll();
    }
    public async getById(id:string):Promise<T> {
        return await this.repository.findByKey(id);
	}
	public async onIsValid(data:T):Promise<void> {

	}
    public async create(data:T):Promise<T> {
		await this.onIsValid(data);
		await this.repository.insert(data);
		return data;
    }
    public async update(id:string, o:T):Promise<void> {
        return await this.repository.updateByKey(id, o);
    }

    public async delete(id:string):Promise<void> {
        return await this.repository.delete(id);
    }
}