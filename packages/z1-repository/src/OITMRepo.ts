import { OITM } from "z1-domain"
import { repoConstructor, SqlRepository} from "sparkle-core";
import { fluentProvide } from "inversify-binding-decorators";
import { BaseRepo } from "./BaseRepo";

@(fluentProvide(OITMRepo)
.inSingletonScope()
.onActivation(repoConstructor).done())
export class OITMRepo extends BaseRepo<OITM>{

}