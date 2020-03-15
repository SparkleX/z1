import { Metadata } from "../../src/index"

test("Metadata.load", async () => {
	var table = await Metadata.load(`${__dirname}/tables/Exam.table.json`);
	expect(table.title).toBe("Exam");
	expect(table.properties["id"].type).toBe("number");
});

test("Metadata.loadAll", async () => {
	var metadata = await Metadata.loadAll(`${__dirname}/tables/`);
	expect(Object.keys(metadata.tables).length).toBe(4);
});	

