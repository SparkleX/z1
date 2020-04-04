import {OITMRepo} from "z1-repository"
import {BaseService} from "./BaseService"
import { OITM } from "z1-domain"
import { injectable } from "inversify";

import { fluentProvide } from "inversify-binding-decorators";

@(fluentProvide(OITMService)
.inSingletonScope()
.done())
export class OITMService extends BaseService<OITMRepo, OITM>{
	public async onIsValid(data:OITM):Promise<void> {
		if(data.ItemCode==null) {
			throw new Error("ItemCode is empty")
		}
	}
}