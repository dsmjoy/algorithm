/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const table = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,

    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
  }


  if (table[s]) {
    return table[s];
  }

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (i + 1 < s.length && table[char + s[i + 1]]) {
      res += table[char + s[i + 1]];
      i++;
    } else if (table[char]) {
      res += table[char];
    }
  }

  return res;
};