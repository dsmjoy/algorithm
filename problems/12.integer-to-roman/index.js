/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var table = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }

  if (table[num]) {
    return table[num];
  }

  let times = 1;
  let res = '';

  while (num > 0) {
    const digit = (num % 10) * times;

    if (digit !== 0) {
      let curRoman = '';
      if (table[digit]) {
        curRoman = table[digit];
      } else {
        const half = times * 10 / 2;
        if (digit < half) {
          curRoman = table[times].repeat(digit / times);
        } else {
          curRoman = table[half] + table[times].repeat((digit - half) / times);
        }
      }

      res = curRoman + res;
    }

    times *= 10;
    num = ~~(num / 10);
  }

  return res;
};