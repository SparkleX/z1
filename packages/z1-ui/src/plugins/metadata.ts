//import Vue from "vue";
import axios from "axios";

class MetadataUtil {
	tables: any;
	constructor() {
		this.init();
	}
	async init() {
		const data = await axios.get(`/api/table`);
		this.tables = data.data;
	}
	public getTable(table: string) {
		return this.tables[table];
	}
	public getColumn(tableDotCol: string) {
		const ar = tableDotCol.split(".");
		const table = ar[0];
		const column = ar[1];
		return this.tables[table].columns[column];
	}
	public getDecimalPlace(tableDotCol: string) {
		const metaCol = this.getColumn(tableDotCol);
		switch (metaCol) {
			case "price":
				return 1;
		}
		return 2;
	}
	async test() {
		alert("test");
	}
}

const metadataUtil = new MetadataUtil();

const Metadata = {
	install: function (Vue: any/*, options*/) {
		Vue.prototype.$metadata = metadataUtil;
	}
};



export default Metadata;