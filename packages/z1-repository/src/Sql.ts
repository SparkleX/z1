import "reflect-metadata"
import { ClsExpress, Connection } from "sparkle-core";

//export const MetadataKey = "Sql:z1-repository";
export function Sql(sql: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        //const originalMethod = target[propertyKey];
        descriptor.value = async function(): Promise<any> {
            var conn: Connection = await ClsExpress.Default.getConnection();
            let result =  conn.execute(sql, arguments as any);
            return result;
        };
        return descriptor;
    };
}


//let sqlCallback: CallbackFunc = function(metadata: any, ...params:any[]):any {
//    return 1;
//}

//RepoManager.regist(MetadataKey, sqlCallback);
