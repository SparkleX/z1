import { SqlRepository} from "../src/index";

interface StudentKey {
	id: Number;
}
interface Student {
	id?: Number;
	firstName?:String;
	lastName?:String;
}
class StudentRepo extends SqlRepository<Student, StudentKey> {
	getTableName(): string {
		return "STUDENT"
	}
}

const mockCallback = jest.fn();
SqlRepository.callbackFunction = mockCallback;
beforeEach(() => {
    mockCallback.mockClear();
});

test("findAll", async () => {
	var rt:Student[] = [
		{id:1, firstName:'a'},
		{id:2, firstName:'b'}
	];
	mockCallback.mockReturnValueOnce(rt);	
	
	var repoStudent:StudentRepo = new StudentRepo();
	var result = await repoStudent.findAll();
	expect(result).toBe(rt);
    expect(mockCallback.mock.calls.length).toBe(1);
	expect(mockCallback.mock.calls[0][0].metadata).toBe('select * from "STUDENT"');
});
/*test("findById w/o return", async () => {
	let mockedHandler:RepoHandlerImpl = mockito.mock(RepoHandlerImpl);
	var handler = mockito.instance(mockedHandler);

	var rt:Student[] = [];
	mockito.when(mockedHandler.execute('select * from "Student" where "id"=?', mockito.deepEqual([1]))).thenResolve(rt);
	
	var repoStudent:StudentRepo = getRepo(handler);
	var result = await repoStudent.findById(1);
		//verify mock
	mockito.verify(mockedHandler.execute('select * from "Student" where "id"=?', mockito.deepEqual([1]))).called();		
	expect(result).to.equal(null);

});	
test("findById with return", async () => {
	let mockedHandler:RepoHandlerImpl = mockito.mock(RepoHandlerImpl);
	var handler = mockito.instance(mockedHandler);

	var student = new Student();
	var rt:Student[] = [student];
	mockito.when(mockedHandler.execute('select * from "Student" where "id"=?', mockito.deepEqual([1]))).thenResolve(rt);
	
	var repoStudent:StudentRepo = getRepo(handler);
	var result = await repoStudent.findById(1);
		//verify mock
	mockito.verify(mockedHandler.execute('select * from "Student" where "id"=?', mockito.deepEqual([1]))).called();		
	expect(result).to.equal(student);

});	
test("deleteById", async () => {
	let mockedHandler:RepoHandlerImpl = mockito.mock(RepoHandlerImpl);
	var handler = mockito.instance(mockedHandler);

	var student = new Student();
	var rt:Student[] = [student];
	mockito.when(mockedHandler.execute('delete from "Student" where "id"=?', mockito.deepEqual([1]))).thenResolve(rt);
	
	var repoStudent:StudentRepo = getRepo(handler);
	await repoStudent.deleteById(1);

	mockito.verify(mockedHandler.execute('delete from "Student" where "id"=?', mockito.deepEqual([1]))).called();		
});

test("insert", async () => {
	let mockedHandler:RepoHandlerImpl = mockito.mock(RepoHandlerImpl);
	var handler = mockito.instance(mockedHandler);

	var student = new Student();
	student.id = 1;
	student.firstName = "Hu";
	student.lastName = "Wang";
	mockito.when(mockedHandler.execute('insert into "Student"("id","firstName","lastName") values(?,?,?)', mockito.deepEqual([1,"Hu","Wang"]))).thenResolve(null);
	
	var repoStudent:StudentRepo = getRepo(handler);
	await repoStudent.insert(student);

	mockito.verify(mockedHandler.execute('insert into "Student"("id","firstName","lastName") values(?,?,?)', mockito.deepEqual([1,"Hu","Wang"]))).called();		
});	
test("update", async () => {
	let mockedHandler:RepoHandlerImpl = mockito.mock(RepoHandlerImpl);
	var handler = mockito.instance(mockedHandler);

	var student = new Student();
	student.id = 1;
	student.firstName = "Hu";
	student.lastName = "Wang";
	mockito.when(mockedHandler.execute('update "Student" set "id"=?,"firstName"=?,"lastName"=? where "id"=?', mockito.deepEqual([1,"Hu","Wang", 1])));
	
	var repoStudent:StudentRepo = getRepo(handler);
	await repoStudent.updateById(1, student);

	mockito.verify(mockedHandler.execute('update "Student" set "id"=?,"firstName"=?,"lastName"=? where "id"=?', mockito.deepEqual([1,"Hu","Wang",1]))).called();		
});		
*/