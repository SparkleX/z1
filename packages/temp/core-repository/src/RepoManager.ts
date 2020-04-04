import { RepoProxy } from "./RepoProxy";

export type CallbackFunc = (metadata: CallbackFuncData, ...params:any[]) => any;

export function repoConstructor(context: any, obj: any): any {
   // var obj = new repo.prototype.constructor();
    var proxyHandler = new RepoProxy();
    var proxy = new Proxy(obj, proxyHandler);
    return proxy;
}

export class RepoManager {
    private static callbacks: { [key: string]: CallbackFunc } = {};
    public static regist(metadataKey: string, callback: CallbackFunc) {
        RepoManager.callbacks[metadataKey] = callback;
    }
    public static getCallbacks():{ [key: string]: any } {
        return RepoManager.callbacks;
    }
}

export interface CallbackFuncData {
    callback?: CallbackFunc;
    metadata: any;
    metadataKey?: string;
    target?: any;
}