import {RepoManager, CallbackFunc} from "./RepoManager";
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
                 var data:ProxyFunctionData = {
                    callback: callbacks[metadataKey],
                    metadata: metadata,
                    metadataKey: metadataKey
                 }
                 return proxyFunction.bind(data);
             }
        }
        console.debug(propKey);
		return target[propKey];
    } 
}

export interface ProxyFunctionData {
    callback: CallbackFunc;
    metadata: any;
    metadataKey: string;
}

async function proxyFunction (...params:any):Promise<any[]> {
    var data = await this.callback(this, params);
    return data;
}