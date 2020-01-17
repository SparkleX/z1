import {Query} from "core-repository"
import {CrudRepository} from "core-repository-crud"
import {Order} from "../domain/Order"

export class OrderRepository extends CrudRepository<Order, Number>{
    @Query("select * from Item where code = $1")
    public async findByCode(code:string):Promise<[]> {return null}
}