const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const array1 = s1.split('');
  const array2 = s2.split('');
  let sum = 0;
  array1.forEach( (item) => {
    let index = array2.findIndex((elem) => elem === item);
    if(~index) {
      sum ++;
      array2.splice(index,1);
    }
  });
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
