import { inject, injectable } from "inversify";
import {controller,httpGet} from "inversify-express-utils";
import { BaseController } from "./BaseController";
import { OITMService } from "z1-service"
import { OITM } from "z1-domain";


@controller("/api")
export class OITMController extends BaseController<OITMService, OITM, String>{

}
