import { repoConstructor } from "core-repository"
import { ORDR } from "z1-domain"
import { fluentProvide } from "inversify-binding-decorators";
import { Sql } from "./Sql";
import {SqlRepository} from "core-repository-crud"


@(fluentProvide(ORDRRepository)
.inSingletonScope()
.onActivation(repoConstructor).done())
export class ORDRRepository extends SqlRepository<ORDR, ORDR>{
    @Sql("select * from Item where code = $1")
    public async findByCode(code:string):Promise<[]> {return []}
}