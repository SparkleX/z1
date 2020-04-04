#!/usr/bin/env node

const argv = require('yargs').argv;
var Validator = require('jsonschema').Validator;
var fs = require('fs');
var handlebars = require('handlebars')

if (!argv.in || !argv.out) {
	console.info("next-domain-repository --in=[input json folder] --out=[output folder]")
	return;
}

var v = new Validator();
var schema = fs.readFileSync(`${__dirname}/../schema/domain.json`, 'utf8');
schema = JSON.parse(schema);

var source = fs.readFileSync(`${__dirname}/template.handlebars`, 'utf8');
var template = handlebars.compile(source);
handlebars.registerHelper('type', function(value, options) {
	switch(value){
		case "string": return "String";
		case "decimal" : return "Number";
	}
	return "any";
});


function validate(content, schema) {
	var errors = v.validate(JSON.parse(content),schema ).errors;
	if(errors.length!=0) {
		console.debug(errors);
		process.exit(-1);
	}
}

function buildSourceCode(content, outFile) {
	var json = JSON.parse(content);
	var sourceCode = template(json);
	fs.writeFileSync(outFile,sourceCode);
}

let dir = argv.in;
let files= fs.readdirSync(dir);	
files.forEach(file => {
	var fullFilePath = `${dir}/${file}`;
	console.info(fullFilePath);
	var content = fs.readFileSync(fullFilePath, 'utf8');
	validate(content, schema);
	var tableName = file.substring(0, file.length - 5);
	var outFile = `${argv.out}/${tableName}.ts`;
	buildSourceCode(content, outFile);
});

//console.debug(argv.in);
//console.debug(argv.out);
//console.debug(`process.cwd:${process.cwd()}`);
//console.debug(`__dirname:${__dirname}`);


