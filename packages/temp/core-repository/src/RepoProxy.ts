import {RepoManager, CallbackFunc, CallbackFuncData} from "./RepoManager";
import "reflect-metadata"

export class RepoProxy implements ProxyHandler<any> {
    private callback: any;
    constructor(callback?:any) {
        this.callback = callback
    }
    get? (target: any, propKey:PropertyKey, receiver: any): any{
        var func = propKey.toString();
        var callbacks = RepoManager.getCallbacks();
        for(let metadataKey in callbacks) {
            var metadata = Reflect.getMetadata(metadataKey, target, func);
            if(metadata) {
                 var data:CallbackFuncData = {
                    callback: callbacks[metadataKey],
                    metadata: metadata,
                    metadataKey: metadataKey,
                    target : target
                 }
                 return proxyFunction.bind(data);
             }
        }
        console.debug(propKey);
		return target[propKey];
    } 
}



async function proxyFunction (...params:any):Promise<any[]> {
    var data = await this.callback(this, params);
    return data;
}