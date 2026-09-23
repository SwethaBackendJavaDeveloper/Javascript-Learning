let name = "Swetha";
let age = "23";
let salary = "50000"
let isStudent = "true";


age = Number(age);
console.log(age, typeof age);

salary =  Number(salary);
console.log(salary, typeof salary);

isStudent = Boolean(isStudent);
console.log(isStudent, typeof isStudent);

age = String(age);
console.log(age, typeof age);

console.log(Number("hello"));


console.log(Number("100"));
console.log(Number("100abc"));
console.log(Number(""));
console.log(Number(" "));
console.log(Number("0"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("false"));