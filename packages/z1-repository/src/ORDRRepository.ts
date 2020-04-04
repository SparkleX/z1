import { repoConstructor} from "sparkle-core";
import { ORDR } from "z1-domain"
import { fluentProvide } from "inversify-binding-decorators";
import { Sql } from "./Sql";
import { BaseRepo } from "./BaseRepo";


@(fluentProvide(ORDRRepository)
.inSingletonScope()
.onActivation(repoConstructor).done())
export class ORDRRepository extends BaseRepo<ORDR>{
    @Sql("select * from Item where code = $1")
    public async findByCode(code:string):Promise<[]> {return []}
}