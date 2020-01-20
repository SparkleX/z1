import { inject, injectable } from "inversify";
import { controller,httpGet} from "inversify-express-utils";
import { BaseController } from "./BaseController";
import { ORDRService } from "z1-service"
import { ORDR } from "z1-domain";


@controller("/api")
export class ORDRController extends BaseController<ORDRService, ORDR, Number>{

}
