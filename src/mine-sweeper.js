const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const length = matrix.length;
  let resArray = new Array(length);
  for (let i = 0; i < length; i++) {
    resArray[i] = new Array(matrix[i].length);
    let count = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      count = 0;
      let jStart = j > 0 ? j - 1 : 0;
      let jEnd = j < matrix[i].length - 1 ? j + 1 : j;
      if (i - 1 >= 0) count += matrix[i - 1].slice(jStart, jEnd + 1).filter(item => item === true).length;
      if (jStart != j) count += matrix[i][j - 1];
      if (jEnd != j) count += matrix[i][j + 1];
      if (i < length - 1) count += matrix[i + 1].slice(jStart, jEnd + 2).filter(item => item === true).length;
      resArray[i][j] = count;
    }
  }
  return resArray;
}

module.exports = {
  minesweeper
};
