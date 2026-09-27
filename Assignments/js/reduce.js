const sum = [10,20,30,40,50];
const totalValues =  sum.reduce(total);

console.log(totalValues);

function total(accumulator,currentValue){
    return accumulator + currentValue;
}

/*
array.reduce((accumulator, currentValue, index, array) => {
    // Your logic
}, initialValue);
*/