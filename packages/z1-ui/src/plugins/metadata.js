//import Vue from "vue";
import axios from "axios";

class MetadataUtil {
	constructor() {
		this.init();
	}
	async init () {
		var data = await axios.get(`/api/table`);
		this.tables = data.data;
		for(var tableName in this.tables) {
			var table = this.tables[tableName];
			table.columnsMap = {};
			for(let col of table.columns) {
				table.columnsMap[col.name] = col;
			}
		}
	}
	getTable(table) {
		return this.tables[table];
	}
	getColumn(tableDotCol) {
		var ar = tableDotCol.split(".");
		var table = ar[0];
		var column = ar[1];
		return this.tables[table].columnsMap[column];
	}	
	async test() {
		alert("test");
	}
}

var metadataUtil = new MetadataUtil();

var Metadata = {};
Metadata.install = function(Vue/*, options*/) {
  // 1. add global method or property
  /*Vue.myGlobalMethod = function() {
    // some logic ...
  };
  
	// 2. add a global asset
	Vue.directive('my-directive', {
	  bind (el, binding, vnode, oldVnode) {
	  }
	})
  
	// 3. inject some component options
	Vue.mixin({
	  created: function () {
		// some logic ...
	  }
	})*/

  // 4. add an instance method
 /* Vue.prototype.$metadata = function() {
    alert("$metadata");
  };*/
	Vue.prototype.$metadata = metadataUtil;
};


export default Metadata;