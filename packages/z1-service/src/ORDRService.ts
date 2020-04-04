import { ORDRRepository } from "z1-repository"
import { BaseService } from "./BaseService";
import { ORDR } from "z1-domain";
import { injectable } from "inversify";
import { fluentProvide } from "inversify-binding-decorators";

@(fluentProvide(ORDRService)
.inSingletonScope()
.done())
export class ORDRService extends BaseService<ORDRRepository, ORDR> {
    test() {
        throw new Error("Method not implemented.");
    }

}