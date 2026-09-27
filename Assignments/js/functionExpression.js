// Function Expression -  A function which can be expressed as a value or variables

const helloWorld = function(){
    console.log("Hello world");
}
    
helloWorld();


const Studentnames = [1,2,3,4,5];

const value = Studentnames.map(
    function(element){
        return Math.pow(element,2).toFixed(2);
    }
)

console.log(value);