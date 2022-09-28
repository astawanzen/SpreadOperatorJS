//SPREAD OPERATOR = allows iterable such as an array or string to be expanded in places where zero or more arguments are expected use "..."
let arr = [10, 9, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(...arr);
//find the max value of that array
let maximum = Math.max(...arr);
console.log(maximum);

//merging to var of array
let employees = ["spongebob", "patrick", "plankton", "crap"];
let boss = ["squidward", "lary", "jerry", "tom"];
employees.push(...boss);
console.log(...employees);
