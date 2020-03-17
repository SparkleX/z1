import {container} from "./inversify.config"
import { ORDRService } from "../src";
import { ORDR } from "z1-domain";
import { ORDRRepository } from "z1-repository";

var mockORDRRepositorygetByKey = jest.fn();
var mockORDRRepository = {
    findByKey : mockORDRRepositorygetByKey
}

container.rebind(ORDRRepository).toConstantValue(mockORDRRepository as any);

test("ORDRServiceTest", async () => {
    mockORDRRepositorygetByKey.mockReturnValueOnce({DocEntry: 1});

    var service: ORDRService = container.get(ORDRService);
    var rt: ORDR = await service.getById( {DocEntry: 1} );
    expect(rt).toStrictEqual({DocEntry: 1});
    
    expect(mockORDRRepositorygetByKey.mock.calls.length).toBe(1);
    expect(mockORDRRepositorygetByKey.mock.calls[0][0]).toStrictEqual({DocEntry: 1});
});
