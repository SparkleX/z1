import { SqlRepository } from "sparkle-core";
import { BaseRepo } from "z1-repository";
import { Container, injectable ,postConstruct, inject } from "inversify";
import * as repos from "z1-repository";

@injectable()
export class BaseService <TRepository extends BaseRepo<T>, T> {
	repository:TRepository;

    @inject(Container.name)
    container: Container;

    tableName: string;

    @postConstruct()
	public init(){
        var name = this.constructor.name;
		if(name.endsWith("Service") == false) {
			throw `${name} is not endwith "Service"`;
		}
        this.tableName = name.substr(0, name.length - "Service".length);   
                
        var repoName = this.tableName + "Repo";
        var repoClass = (repos as any)[repoName]
        this.repository = this.container.get<TRepository>(repoClass);
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