/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

  if (!digits) {
    return [];
  }

  const phoneMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  if (digits.length === 1) {
    return phoneMap[digits].split('');
  }

  const res = [];

  combine(digits, 0, phoneMap, res, '');

  return res;
};

function combine(digits, index, phoneMap, combinations, prefix) {
  const letters = phoneMap[digits[index]];

  for (let i = 0; i < letters.length; i++) {
    if (index === digits.length - 1) {
      combinations.push(prefix + letters[i]);
    } else {
      combine(digits, index + 1, phoneMap, combinations, prefix + letters[i]);
    }
  }
}