/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const sLen = s.length;
  let num = 0;
  let flag = 1;

  const automaton = new Automaton();
  for (let i = 0; i < sLen; i++) {
    const char = s[i];
    const state = automaton.getState(char);
    if (state === 'end') {
      break;
    } else if (state == 'signed') {
      flag = char === '+' ? 1 : -1;
    } else if (state === 'inNumber') {
      const digit = parseInt(char);
      if (!checkAdditionOverflow(num * flag, digit)) {
        return flag === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
      }

      num = num * 10 + digit;
    }
  }

  return num * flag;
};


class Automaton {
  state = 'start';
  table = {
    start: {
      space: 'start',
      number: 'inNumber',
      sign: 'signed',
      other: 'end'
    },
    inNumber: {
      space: 'end',
      number: 'inNumber',
      sign: 'end',
      other: 'end'
    },
    signed: {
      space: 'end',
      number: 'inNumber',
      sign: 'end',
      other: 'end'
    },
    end: {
      space: 'end',
      number: 'end',
      sign: 'end',
      other: 'end'
    }
  }

  getState(char) {
    this.state = this.table[this.state][this.getAction(char)];
    return this.state;
  }

  getAction(char) {
    if (char === ' ') {
      return 'space';
    } else if (char === '+' || char === '-') {
      return 'sign';
    } else if (char >= '0' && char <= '9') {
      return 'number';
    }

    return 'other';
  }
}

function checkAdditionOverflow(num, digit) {
  const INT_MAX = Math.pow(2, 31) - 1; // 2147483647
  const INT_MIN = -Math.pow(2, 31); // -2147483648

  if (num > 0) {
    const max = ~~(INT_MAX / 10);
    if (num > max) {
      return 0;
    } else if (num === max && digit > 7) {
      return 0
    }
  } else {
    const min = ~~(INT_MIN / 10);
    if (num < min) {
      return 0;
    } else if (num === min && digit > 8) {
      return 0;
    }
  }

  return 1;
}
