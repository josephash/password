// Assignment code here
function randomNumber(min, max) {
  if (Number(max) != NaN && Number(min) != NaN && max == Math.floor(max) && min == Math.floor(min)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return null;
  }
}

function generatePassword() {
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = [' ', '!', '"', '#', '$', '%', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  
  var defaultLength = 16;
  var passwordLength = window.prompt("Length of password:", "Enter a number between 8 and 128");
  // filter input
  if (isNaN(passwordLength)) {
    window.alert("Not a number, resetting to default length of " + defaultLength);
    passwordLength = defaultLength;
  } else if (passwordLength != Math.floor(passwordLength)) {
    window.alert("Not an integer, resetting to default length of " + defaultLength);
    passwordLength = defaultLength;
  } else if (passwordLength < 8) {
    window.alert("Number is less than 8, resetting to default length of " + defaultLength);
    passwordLength = defaultLength;
  } else if (passwordLength > 128) {
    window.alert("Number is greater than 128, resetting to default length of " + defaultLength);
    passwordLength = defaultLength;
  }
  // rest of password criteria
  var includeLowercase = window.confirm("Include lowercase letters?\n(click OK for yes, Cancel for no)");
  var includeUppercase = window.confirm("Include uppercase letters?\n(click OK for yes, Cancel for no)");
  var includeNumbers = window.confirm("Include numbers?\n(click OK for yes, Cancel for no)");
  var includeSpecialChars = window.confirm("Include special characters?\n(click OK for yes, Cancel for no)");
  
  // generate password
  var charList = '';
  var password = '';
  if (includeLowercase) {
    charList += lowercase.join('');
  }
  if (includeUppercase) {
    charList += uppercase.join('');
  }
  if (includeNumbers) {
    charList += numbers.join('');
  }
  if (includeSpecialChars) {
    charList += specialChars.join('');
  }
  if (charList.length == 0) {
    window.alert("Password cannot be generated because all possible characters are excluded.");
  } else {
    for (var i = 0; i < passwordLength; i++) {
      password += charList[randomNumber(0, charList.length - 1)];
    }
  }
  return password;
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
