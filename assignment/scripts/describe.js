// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and define a string "Dane"
// then we check if the variable name is exactly the same as Mary and if it is the console will display "Hi Mary!"
// If the name variable isn't Mary the the console will display "how do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we define that we have a variable secret and set variable code to equal 123.
// we check if the variable code is equal to 123. 
// which it is so we then define the variable secret with the string "super" and we multiply the variable code by 2.
// this makes the code equal to 246
// then we check if the code variable is greater than 250, which it is not 
// so the console log will display the variable secret which is "super"
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// first we are defineing 3 variables. isStudent is a boolean defined as true, age is 34, zip is 55407
// Then we are checking if isStudent is true and if zip is greater than 80000. 
// this is not true so we move on to the next argument
// then we check if isStudent is false or age is less than 30. neither fulfill the argument so on to the next
// then we check if just isStudent is true, which it is so console.log will display "Welcome to Prime!"
//this ends the if else statements 
// if none fulfilled the arguments the console would display "How about the weather" which was not the case here.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorOne should be defined as 'blue' and colorTwo should be defined as 'red'

if (mix === true) {
  colorOne = 'purple';
}

// FIX - need to also redefine colorTwo as 'purple'
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - time should not be a constant since it could change therefore use let to define as a variable

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
// FIX - if statment is using an or statement and should be a and statement by using &&
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - the if statement expression works but should be if (age >= minAge) to reflect the language of desc.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// FIX - the if statement console.log should state "enter"
// therefore the else statement should console.log "no entry" 
*/

