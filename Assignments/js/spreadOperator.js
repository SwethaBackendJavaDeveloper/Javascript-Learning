let numbers = [1,2,3,4];

let number = [...numbers,5];

let combine = [...numbers,...number];


console.log(number);
console.log(combine);

function call(a,b,c,d){
    console.log(a+b+c+d);
}

call(...numbers);