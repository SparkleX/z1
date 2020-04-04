import { Container } from "inversify";
import * as entries from "./Entries";
import {autoProvide, buildProviderModule} from "inversify-binding-decorators";

const container = new Container();
container.bind(Container.name).toConstantValue(container);
for (const key in entries) {
	autoProvide(container, (entries as any)[key]);
}
container.load(buildProviderModule());

export {container}
