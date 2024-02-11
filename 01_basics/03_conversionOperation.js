let score ="33"
//but i want to use it as number then we hane to convert it;
console.log(typeof(score)); //string

let valueInNumber = Number(score);
console.log(typeof(score)); //number

//if we get an input as "33abc" and we want to convert it in number
let value ="33abc";

valueInNumber = Number(value);
console.log(typeof(valueInNumber)); //number 
//but when we try to get the value of valueInNumber what we get is NaN;
console.log(valueInNumber); //NaN
//So when we try to convert and it is not possible to convert the give
//value then it will return NaN value(Not a Number);

score = null;
valueInNumber = Number(score);
console.log(score); //0

//when we try to convert null into number then it will return 0;

score = undefined;
valueInNumber = Number(score);
console.log(score); //NaN

score = true;
valueInNumber = Number(score);
console.log(score); //1

score = false;
valueInNumber = Number(score);
console.log(score); //0

//-------------------------------------------------------

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//false
//In case of empty string it will return false;

isLoggedIn = "Rishav";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

//-------------------------------------------------

let someNumber = 33;
let valueInString = String(someNumber);
console.log(typeof(someNumber));//string
console.log(valueInString);//33