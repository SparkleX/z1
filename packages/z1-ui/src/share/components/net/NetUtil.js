import axios from "axios";

function ignore500 (status) {
	return status <= 500;
}
export class NetUtil {
	static async getTable(tableName) {
		var data = await axios.get(`/api/table/${tableName}`);
		return data.data;
	}
	static async create(table, data) {
		var dataReturn = await axios.post(`/api/${table}`, data, {validateStatus: ignore500});
		if(dataReturn.status==500) {
			throw new Error(dataReturn.data);
		}
		return dataReturn.data;
	}	
}