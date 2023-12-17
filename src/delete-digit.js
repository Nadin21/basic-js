const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayNumber = String(n).split('');
  const varietyNumber = [];
  for (let i = 0; i < arrayNumber.length; i++) {
    let newNumber = arrayNumber.slice(0, i).concat(arrayNumber.slice(i + 1));
    varietyNumber.push(Number(newNumber.join('')));
  }
  return varietyNumber.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
