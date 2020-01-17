var fs = require('fs');
var schema = fs.readFileSync(`../node_modules/c1-domain/domain/JDT0.json`, 'utf8');
console.debug(schema);