

specialCharacters
numericCharacters
lowerCasedCharacters
upperCasedCharacters

function generatePassword(length, includeSpecial, includeNumbers, includeUpperCase, includeLowerCase) {
    const specials = '!@#$%^&*()_-+=<>?';
    const numbers = '0123456789';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  
    let characters = '';
  
    if (includeSpecial) {
      characters += specials;
    }
    if (includeNumbers) {
      characters += numbers;
    }
    if (includeUpperCase) {
      characters += upperCaseLetters;
    }
    if (includeLowerCase) {
      characters += lowerCaseLetters;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Example usage:
  const password = generatePassword(12, true, true, true, true);
  console.log(password);