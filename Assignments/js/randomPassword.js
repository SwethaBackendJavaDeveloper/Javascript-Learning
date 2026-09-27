function passwordGenerator(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){


    const lowerCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const upperCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars =  "0123456789";
    const symbolChars = "!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLength<=0){
        console.log("Password lenght must be atleast 1");
    }

    if(allowedChars.length === 0){
        console.log("Atleast 1 set of character must be selected");
    }

    for(let i=0; i< passwordLength; i++){
        const randomIndex  = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = passwordGenerator(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
console.log(`Generated Password : ${password}`);
