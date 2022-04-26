/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const len = strs.length;

  const map = {}

  for (let i = 0; i < len; i++) {
    const str = strs[i];

    const sortedStr = str.split('').sort().join('');

    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }

  return Object.values(map);
};