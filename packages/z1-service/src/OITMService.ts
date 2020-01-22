import {OITMRepository} from "z1-repository"
import {BaseService} from "./BaseService"
import { OITM } from "z1-domain"
import { injectable } from "inversify";

@injectable()
export class OITMService extends BaseService<OITMRepository, OITM, String>{
	public async onIsValid(data:OITM):Promise<void> {
		if(data.ItemCode==null) {
			throw new Error("ItemCode is empty")
		}
	}
}