import {OCRDRepository} from "z1-repository"
import { OCRD } from "z1-domain";
import { BaseService } from "./BaseService";
import { injectable } from "inversify";

@injectable()
export class OCRDService extends BaseService<OCRDRepository, OCRD, String>{

}