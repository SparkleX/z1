# Repository Pattern for Type Script

## Change Log
1. Allow define decorator by yourself
2. Callback change to function

---
1. Declare Decorator 

```ts
import "reflect-metadata"

export const MetadataKey = "Sql:repository";
export function Sql(sql: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKey, sql, target.__proto__, descriptor.value.name);
    };
}

let sqlCallback: CallbackFunc = function(metadata: any, ...params:any[]):any {
    // Will be executed when "Decorator" function called
    return 1;
}
// Regist to Repository Manager
RepoManager.regist(MetadataKey, sqlCallback);

```


---
2. Declare Repository with @Sql

```ts

export class SampleRepository{
    @Sql('select * from "order" where "id" = ?')
	public async findById(id:Number):Promise<any> {return null};
}
```

3. Use repository

```ts
    var repository = RepositoryFactory.repoConstructor(null, SampleRepository);
    var result = await repository.findById(1); // return 1
```
4. Inversify integreation
```ts

@(fluentProvide(SampleRepository).inSingletonScope().onActivation(repoConstructor).done())
export class SampleRepository{
    @Sql('select * from "order" where "id" = ?')
	public async findById(id:Number):Promise<any> {return null};
}
```