import {ORDRRepository} from "z1-repository"
import { BaseService } from "./BaseService";
import { ORDR } from "z1-domain";
import { injectable } from "inversify";

@injectable()
export class ORDRService extends BaseService<ORDRRepository, ORDR, Number> {

}