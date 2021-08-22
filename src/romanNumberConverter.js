var dict = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  let romanNumber = "";

  for (let i of Object.keys(dict)) {
    let value = dict[i];

    while (num >= value) {
      romanNumber += i;
      num -= value;
    }
  }

  return romanNumber;
}

convertToRoman(36);
