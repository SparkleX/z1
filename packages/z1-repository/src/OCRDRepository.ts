import {CrudRepository} from "core-repository-crud"
import {OCRD} from "z1-domain"
import { injectable } from "inversify";

@injectable()
export class OCRDRepository extends CrudRepository<OCRD, String>{

}