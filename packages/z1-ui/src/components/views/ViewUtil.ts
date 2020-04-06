
function scan (item: any, callback: any) {
	for(const c of item.$children) {
		//console.log(c.$options.name);
		/*if(c.attrs$) {
			console.log(c.attrs$.id);
		}*/
		//c.$el
		callback(c);
		scan(c, callback);
	}
}
export function setEditable(item: any, editable: any) {
	scan(item, function(c: any){
		if(c.$options.name && c.$options.name.startsWith("s-")) {
			c.editable = editable;
			console.log(editable);
		}
	});
}

export function getView(item: any) {
	let view = item;
	while(view.$vnode.tag.endsWith("-detail-view")==false) {
		view = view.$parent;
	}
	
	return view;
}

