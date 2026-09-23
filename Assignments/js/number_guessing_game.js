//Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1) + minNum);


let attempt =0 ;
let guess;
let running = true;

while(running){

    guess =  window.prompt("Guess the number : ");
    guess= Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
         window.alert("Please enter a valid number");
    }
    else{

        attempt++;
        if(guess<answer){
             window.alert("Too low value try again!");
        }
        else if(guess>answer){
             window.alert("Tooo High value try again!");
        }
        else{
             window.alert(`Correct number. You tried ${attempt} attempts`);
            running = false;
        }
    }
}