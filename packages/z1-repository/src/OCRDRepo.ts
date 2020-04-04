import { repoConstructor } from "sparkle-core";

import {OCRD} from "z1-domain"
import { fluentProvide } from "inversify-binding-decorators";
import { BaseRepo } from "./BaseRepo";

@(fluentProvide(OCRDRepo)
.inSingletonScope()
.onActivation(repoConstructor).done())
export class OCRDRepo extends BaseRepo<OCRD>{

}