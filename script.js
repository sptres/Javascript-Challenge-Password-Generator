function generatePassword() {
    var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['!', '@', '#', '$', '%', '^', "&", '(', ')', '_', '-', '[', ']', '{', '}', ',', '.', '<', '>', '?', '+', '='];
    var possibleCharacters = [];
  
    // user inputs for prompts 
    numberOfCharacters = prompt("How many characters for your password? (minimum 8, maximum 128)");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      return "Please choose a number between parameter";
    } else if(isNaN(numberOfCharacters)) {
      numberOfCharacters = prompt("Please enter an interger of number");
    }
    else {
      alert("Your password is now " + numberOfCharacters + " characters long.");
    }
  
    hasLowercase = confirm("Do you want lowercase character in your password?");
    if (hasLowercase) {
      alert("Your password now includes lowercase characters.");
    }
    else {
      alert("Your pass now doesn't include lowercase characters.");
    }
  
    hasUppercase = confirm("Do you want uppercase character in your password?");
    if (hasUppercase) {
      alert("Your password now includes uppercase characters.");
    }
    else {
      alert("Your password now doesn't include uppercase characters.");
    }
  
    hasNumeric = confirm("Do you want numbers in your password?");
    if (hasNumeric) {
      alert("Your password now includes numbers.");
    }
    else {
      alert("Your password now doesn't include numbers.");
    }
  
    hasSpecial = confirm("Do you want special character in your password?");
    if (hasSpecial) {
      alert("Your password now includes special characters.");
    } 
    else {
      alert("Your password now doesn't include special characters.");
    }
  
    if (hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSpecial === false)
    { alert("At least one character type required to generate a password.");
    }
  
    //grouping selected character types 
    if (hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }
    if (hasUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    }
    if (hasNumeric) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }
    if (hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
  
    //generating password
    let generatedPassword = ""
    for (let i = 0; i < numberOfCharacters; i++) {
      let rng =[Math.floor(Math.random() * possibleCharacters.length)];
      generatedPassword = generatedPassword + possibleCharacters[rng];
    }
    return generatedPassword;
  };
  // Class selec generate
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  