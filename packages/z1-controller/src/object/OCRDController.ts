import { inject, injectable } from "inversify";
import {controller,httpGet} from "inversify-express-utils";

import { BaseController } from "./BaseController";
import {OCRDService} from "z1-service"
import { OCRD } from "z1-domain";


@controller("/api/OCRD")
export class OCRDController extends BaseController<OCRDService, OCRD, OCRD>{
  

}
