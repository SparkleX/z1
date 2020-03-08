import { Sql } from "./Sql";

export class SampleRepository{
    @Sql('select * from "order" where "id" = ?')
	public async findById(id:Number):Promise<any> {
		return null
	};
	public async findByLastName():Promise<Number> {
		return 404
	};
	
}