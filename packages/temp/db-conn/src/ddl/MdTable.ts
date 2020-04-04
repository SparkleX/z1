import { Property } from "./Property";

export class MdTable {
	public title:string ;
	public description:string;
	public primaryKey:[];
	public properties:{[index:string]:Property};
}