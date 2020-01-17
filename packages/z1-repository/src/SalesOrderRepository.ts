import {Query} from "core-repository"
import {CrudRepository} from "core-repository-crud"
import {SalesOrder} from "z1-domain"

export class SalesOrderRepository extends CrudRepository<SalesOrder, Number>{
    @Query("select * from Item where code = $1")
    public async findByCode(code:string):Promise<[]> {return []}
}