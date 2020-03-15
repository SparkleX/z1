import { repoConstructor } from "core-repository"
import {SqlRepository} from "core-repository-crud"
import {OCRD} from "z1-domain"
import { fluentProvide } from "inversify-binding-decorators";

@(fluentProvide(OCRDRepository)
.inSingletonScope()
.onActivation(repoConstructor).done())
export class OCRDRepository extends SqlRepository<OCRD,OCRD>{

}