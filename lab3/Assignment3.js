
const _ = require('lodash');
const users = [

  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 20 }
];


const filteredUsers = _.filter(users, user => user.age > 25);


const sortedUsers = _.sortBy(users, 'age');


console.log('Filtered Users (age > 25):');
console.log(filteredUsers);

console.log('\nSorted Users (by age ascending):');
console.log(sortedUsers);
