// Assignment code here
// Assigned the variables names, and added strings to use. 

 var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
   var special = ["!", "@", "#", "$", "%", "^", "&", "*"];
   var retval = ""; 

 
  // telling the user how to make a secure password 

  window.alert("Ready to make a password ?")
alert("It has to be 10 characters long")
alert("It needs one uppercase, one lower, one number, and one special character")
 
// generate a password with 10 total characters, one lower case, one number, and one special character
function makepass () {
  for ( var i = 0; i < length ; ++i )
retval +=  Math.floor(Math.random() * retval) ;for (let index = 0; index < array.length; index++) {
	const element = array[index];
	 
}
return retval ; }

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