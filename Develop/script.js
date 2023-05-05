// Assignment code here
// Create function generatePassword
function generatePassword() {
// Ask user for length
// choose length to be at least 8 and less than 128 characters

// choose types
// choose if lowercase
// choose if uppercase
// choose if numeric
// choose if special character
// make sure to at least have one of those options

// Password should match all of the given criteria
// password should be displayed in an alert or writtnen to that page
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
