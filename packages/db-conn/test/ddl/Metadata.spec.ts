import { Metadata, MdColumnType } from "../../src/index"

test("Metadata.load", async () => {
	var table = await Metadata.load("./test/ddl/tables/Exam.json");
	expect(table.name).toBe("Exam");
	expect(table.columns[0].name).toBe("id");
	expect(table.columns[0].type).toBe(MdColumnType.number);
});

test("Metadata.loadAll", async () => {
	var metadata = await Metadata.loadAll("./test/ddl/tables/");
	expect(metadata.tables.length).toBe(4);
});	
