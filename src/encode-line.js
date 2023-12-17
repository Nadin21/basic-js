const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(typeof str !== 'string') return false;
  let num = 1;
  let encode = '';
  for (let i = 0; i < str.length; i++) {
    if(str[i] == str[i + 1] && i < str.length -1) num++;
    if(str[i] !== str[i + 1] || i == str.length - 1) {
        if(num > 1) {
          encode = encode + String(num) + str[i - 1];
           num = 1;
      }
      else encode = encode + str[i];
    }
  }
  return encode;
}

module.exports = {
  encodeLine
};
