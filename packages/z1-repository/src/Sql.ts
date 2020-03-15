import "reflect-metadata"
import { CallbackFunc, RepoManager } from "core-repository";
import {  } from "core-repository";


export const MetadataKey = "Sql:z1-repository";
export function Sql(sql: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKey, sql, target.__proto__, descriptor.value.name);
    };
}

let sqlCallback: CallbackFunc = function(metadata: any, ...params:any[]):any {
    return 1;
}

RepoManager.regist(MetadataKey, sqlCallback);
