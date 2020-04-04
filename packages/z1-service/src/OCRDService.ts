import {OCRDRepository} from "z1-repository"
import { OCRD } from "z1-domain";
import { BaseService } from "./BaseService";
import { injectable } from "inversify";
import { fluentProvide } from "inversify-binding-decorators";

@(fluentProvide(OCRDService)
.inSingletonScope()
.done())
export class OCRDService extends BaseService<OCRDRepository, OCRD>{

}