import { CrudRepository } from "../../core-repository-crud/dist";

export class BaseService <TRepository extends CrudRepository<T,ID>, T extends object, ID> {
    repository:TRepository;

    public async getById(id:ID) {
        await this.repository.findById(id);
    }
    public async create(data:T) {
        return this.repository.insert(data);
    }
    public async update(id:ID, o:T) {
        return await this.repository.updateById(id, o);
    }

    public async delete(id:ID) {
        return await this.repository.deleteById(id);
    }
}