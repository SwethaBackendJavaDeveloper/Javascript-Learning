//FORMAT THE DATES
const dates = ["2023-2-23","2024-5-30"];

const formatedDates = dates.map(formatDate);

console.log(formatedDates);
function formatDate(part){
    const parts = part.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

//EACH NUMBER IS MULTIPLIED BY ITS INDEX

const arr = [1,2,3,4,5];
const arrValues = arr.map(multiply);
console.log(arrValues);

function multiply(element,index){
    return element*index;
}

//create a new array with a welcome message for each student

let studentList = ["Ravi", "Priya", "Chandu"];
const studentName = studentList.map(welcomeMsg);
console.log(studentName);

function welcomeMsg(name){
    return `Welcome ${name}`;
}