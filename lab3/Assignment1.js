const lodash = require('lodash');
const user = { name: 'John', age: 25, city: 'New York' };
const newUser = lodash.omit(user, 'age');
console.log(newUser);
const pickedUser = lodash.pick(user, ['name', 'age']);
console.log(pickedUser);

