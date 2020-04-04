import "reflect-metadata"
import { CallbackFunc, RepoManager } from "../src";

export const MetadataKey = "Sql:repository";
export function Sql(sql: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKey, sql, target.__proto__, descriptor.value.name);
    };
}

//let sqlCallback: CallbackFunc = function(metadata: any, ...params:any[]):any {
//    return 1;
//}

//RepoManager.regist(MetadataKey, sqlCallback);
