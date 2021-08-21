function palindrome(str) {
  //remove all non-alphanumeric characters and underscore
  let regex = /[\W|_]/g;
  let newStr = str.replace(regex, "").toLowerCase();

  //check letters
  for (let i = 0, j = newStr.length - 1; i < str.length / 2; i++, j--) {
    let charA = newStr[i];
    let charB = newStr[j];

    if (charA !== charB) return false;
  }

  return true;
}

palindrome("_eye");
