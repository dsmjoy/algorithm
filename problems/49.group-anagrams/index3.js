/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const len = strs.length;

  const map = {}

  for (let i = 0; i < len; i++) {
    const str = strs[i];

    const count = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      const index = str[j].codePointAt() - 97;
      count[index]++;
    }

    const sortedStr = count.map(e => String.fromCodePoint(e + 97)).join('');

    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }

  return Object.values(map);
};