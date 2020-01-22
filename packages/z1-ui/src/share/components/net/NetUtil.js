import axios from "axios";

export class NetUtil {
	static async getTable(tableName) {
		var data = await axios.get(`/api/table/${tableName}`);
		return data.data;
	}
	static async create(table, data) {
		var dataReturn = await axios.post(`/api/${table}`, data);
		return dataReturn.data;

	}	
}