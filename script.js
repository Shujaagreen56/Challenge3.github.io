// clean up a lot of code, write password is an empty function. 




// Assignment code here
//Assigned the variables names, and added strings to use. 

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charset = ["!", "@", "#", "$", "%", "^", "&", "*"];
var retval = "";
var upper = false;
var low = false;
var spec = false;
var num = 0;
var passlength = 0;

//telling the user how to make a secure password 

window.alert("Ready to make a password ?");

// var passlength = prompt("How long do you want the password to be ?(hint: it has to be less than 128 characters and more than 8.)")

function requirements() {
  passlength = prompt("How long do you want the password to be ?(hint: it has to be less than 128 characters and more than 8.)");
  if (Number.isNaN(passlength)) {
    alert('')
    return null;
  }
  if (passlength > 128 || passlength < 8) {
    alert("Please try again")
    return null;
  }
  // ask user if they want special characters 
  spec = confirm("Do you want special characters ?");
  

  //ask user if they want a number 
  num = confirm("Do you want a number ?");
 
  // ask user if they want lower case 

  low = confirm("Do you want a lower case ?");

  // ask user if they want upper case 
  upper = confirm("Do you want an upper case ?");
};


// windowow.alert("Please try again")

function generate() {
  requirements();
  var generatedpassword = passwordlogic();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedpassword.join("");

}

function passwordlogic() {// tell the function to pick from the letters 
  var answer = [];
  var myArray = [];
  if (upper == true) {
    myArray = myArray.concat(uppercase);
    answer.push(random(upper));
  } if (low == true) {
    myArray = myArray.concat(lower);
    answer.push(random(low));
  }
  if (spec == true) {
    myArray = myArray.concat(charset);
    answer.push(random(spec));
  }
  if (num == true) {
    myArray = myArray.concat(num);
    myArray = myArray.concat(numbers);
  }
  // add logic for two more arrays 

  //if everything is false, output an alert. 
  // if everytime an array is true we have to make sure we must be sure to add at least one of that value
  // upper code looks like it is logical,  set that up for each array. add the .push(random) to the answer, which includes at least one value of each chosen array.
  // more desrciptive variables, make it easy to understand. 

  var crranswerlength = answer.length;

  for (var i = crranswerlength - 1; i < passlength; i++) {
    answer[i] = random(myArray);
  }
  console.log(myArray);
  console.log(answer);
  return answer;
}

function random(options) {
  var myIndex = Math.floor(Math.random() * options.length);
  return options[myIndex];
}


var options = [
  passnum = numbers,
  passspec = charset ,
  passuppercase = uppercase ,
  passlow = lower ];


// var index = Math.floor(Math.random() * options.length);
//var computerChoice = options[index];

//choices = [passlength, special] 
//if (condition) {

//} else {

//

//var passlength = [];
//var special = []; 

// generate a password with 10 total characters, one lower case, one number, and one special character


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", generate); 