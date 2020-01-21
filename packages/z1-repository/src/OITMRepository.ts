import {CrudRepository} from "core-repository-crud"
import {OITM} from "z1-domain"
import { injectable } from "inversify";

@injectable()
export class OITMRepository extends CrudRepository<OITM, String>{

}