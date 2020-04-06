<script>
import axios from "axios";
//import * as ViewUtil from "./ViewUtil"

export default {
	props: { 
	},
	data : function(){
		return {
			viewType: "detail",
			formMode: "viewMode",
			d : {}
		}
	},
	computed: {
		dataEditable : function () {
			return this.addMode || this.editMode;
		},
		addMode : function () {
			return this.formMode == "addMode";
		},
		editMode : function () {
			return this.formMode == "editMode";
		},
		viewMode : function () {
			return this.formMode == "viewMode";
		}
	},
	methods: {
		setFormMode : function (val) {
			this.formMode = val;
		}
	},
	async mounted() {
		if(this.$route.params.id=="undefined") {
			this.formMode = "addMode";
		}
		else {
			const id = this.$route.params.id;
			const data = await axios.get(`/api/${this.$data.$$object}/${id}`);
			this.d = data.data;
		}
	}

}
</script>