import { OITM } from "z1-domain"
import { fluentProvide } from "inversify-binding-decorators";
import { BaseRepo } from "./BaseRepo";

@(fluentProvide(OITMRepo)
.inSingletonScope()
.done())
export class OITMRepo extends BaseRepo<OITM>{

}