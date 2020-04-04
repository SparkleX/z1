import { repoConstructor, SqlRepository} from "sparkle-core";

export class BaseRepo<T> extends SqlRepository<T, string>
{

}