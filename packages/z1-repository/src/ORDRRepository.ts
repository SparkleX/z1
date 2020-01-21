import {Query} from "core-repository"
import {CrudRepository} from "core-repository-crud"
import {ORDR} from "z1-domain"
import { injectable } from "inversify";

@injectable()
export class ORDRRepository extends CrudRepository<ORDR, Number>{
    @Query("select * from Item where code = $1")
    public async findByCode(code:string):Promise<[]> {return []}
}