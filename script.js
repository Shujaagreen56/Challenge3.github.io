// Assignment code here
//Assigned the variables names, and added strings to use. 

 var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var charset = ["!", "@", "#", "$", "%", "^", "&", "*"];
 
 var retval = ""
//telling the user how to make a secure password 

window.alert("Ready to make a password ?")
var passlength = window.prompt("How long do you want the password to be ?(hint: it has to be less than 128 characters and more than 8.)" ); 
  if ( passlength === Number ){
   return; }
  if ( passlength > 128 ){
   return ; } 
    if ( passlength < 8) {
      return; 
    }
 // windowow.alert("Please try again")
var special = window.prompt("What special characters do you want ?");
if ( special === charset(0)) { result = 'Does not meet requirements' ; }
  else { result = 'meets requirements'} 
  return special ;

  let choices = []
  //choices = [passlength, special] 
  //if (condition) {
    
  //} else {
    
  //}

//var passlength = [];
//var special = []; 
 
// generate a password with 10 total characters, one lower case, one number, and one special character


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 