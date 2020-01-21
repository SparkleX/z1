import { MdTable } from ".";
import * as fs from "fs";

export class Metadata {
	public constructor() {
	}
	public tables:{ [key:string]:MdTable; } = {}
	public static async load(filename:string):Promise<MdTable> {
		var contents = fs.readFileSync(filename).toString();
		var table:MdTable = JSON.parse(contents);
		return table;

	}
	public static async loadAll(foldername:string):Promise<Metadata> {
		var rt:Metadata = new Metadata();
		var files:string[] = fs.readdirSync(foldername);
		for (let file of files) {
			var mdTable = await Metadata.load(foldername + file);
			rt.tables[mdTable.name] = mdTable;
		}
		return rt;
	}	
}