/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

  const rowLen = board.length;
  const colLen = board[0].length;
  const visited = new Array(rowLen);
  const firstChars = [];

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (!visited[rowIndex]) {
        visited[rowIndex] = [];
      }

      visited[rowIndex][colIndex] = false;

      if (board[rowIndex][colIndex] === word[0]) {
        firstChars.push([rowIndex, colIndex])
      }
    })
  })

  /**
   * 
   * @param {*} charIndex 
   * @param {*} nextChar 
   * @returns 
   */
  const getNextChars = (charIndex, nextChar) => {
    const [x, y] = charIndex;

    return [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].filter(e => e[0] >= 0 && e[0] < rowLen && e[1] >= 0 && e[1] < colLen && !visited[e[0]][e[1]]).filter(e => board[e[0]][e[1]] === nextChar);
  }


  /**
   * 
   * @param {*} chars 
   * @param {*} index 
   * @returns 
   */
  const backtrack = (chars, index) => {
    for (let i = 0; i < chars.length; i++) {
      const curCharIndex = chars[i];
      const nextChar = word[index + 1];
      const nextChars = getNextChars(curCharIndex, nextChar);

      if (index === word.length - 2 && nextChars.length) {
        return true;
      }

      if (nextChars.length) {
        visited[curCharIndex[0]][curCharIndex[1]] = true;
        let res = backtrack(nextChars, index + 1);
        if (res) {
          return true;
        }

        visited[curCharIndex[0]][curCharIndex[1]] = false;
      }
    }

    return false;
  }

  if (word.length === 1) {
    return firstChars.length;
  }

  return backtrack(firstChars, 0);
};