import {  repoConstructor, RepoManager} from "../src"
import {SampleRepository} from "./SampleRepository"
import {MetadataKey} from "./Sql"

const mockCallback = jest.fn();
var orderRepository = repoConstructor(null, SampleRepository);
/*.mockImplementation(() => {
    return 1;
});*/
RepoManager.regist(MetadataKey, mockCallback);    

beforeEach(() => {
    mockCallback.mockClear();
});

test("findById", async () => {
    mockCallback.mockReturnValueOnce(1);
    var result = await orderRepository.findById(2);        
    //verify data
    expect(result).toBe(1);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0].metadata).toBe('select * from "order" where "id" = ?');
    expect(mockCallback.mock.calls[0][1]).toStrictEqual([2]);
});

test("findByLastName", async () => {
    var result = await orderRepository.findByLastName(); 
    expect(result).toBe(404);
    expect(mockCallback.mock.calls.length).toBe(0);
});	
