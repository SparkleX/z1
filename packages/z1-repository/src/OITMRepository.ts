import { OITM } from "z1-domain"
import { repoConstructor } from "core-repository";
import { fluentProvide } from "inversify-binding-decorators";
import {SqlRepository} from "core-repository-crud"

@(fluentProvide(OITMRepository)
.inSingletonScope()
.onActivation(repoConstructor).done())
export class OITMRepository extends SqlRepository<OITM,OITM>{

}