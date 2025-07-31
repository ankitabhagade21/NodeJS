
const _ = require('lodash');


const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = _.chunk(array, 3);


const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = _.flatten(nestedArray);


console.log('Chunked Array (size 3):');
console.log(chunkedArray);

console.log('\nFlattened Array:');
console.log(flattenedArray);
