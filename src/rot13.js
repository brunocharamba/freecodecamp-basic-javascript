var regex = /\w/;
var limit = [65, 91];

function rot13(str) {
  let arr = [...str];

  for (let i in arr) {
    let letter = arr[i];

    // if letter is an alphabetic character, do the conversion
    if (regex.test(letter)) {
      let char = letter.charCodeAt() + 13;

      // if the new charcode overflows the alphabetic limit, start from the initial value
      char = char > 90 ? char - limit[1] + limit[0] : char;

      arr[i] = String.fromCharCode(char);
    }
  }

  return arr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
