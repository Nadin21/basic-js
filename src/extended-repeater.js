const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let { repeatTimes, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|' } = options;
  let arraySrt = new Array(repeatTimes);
  addition = String(addition);
  if (addition) {
    if (additionRepeatTimes) addition = repeater(addition, { repeatTimes: additionRepeatTimes, separator: String(additionSeparator) });
    str = String(str) + addition;
  }
  arraySrt = arraySrt.fill(str);
  res = arraySrt.join(String(separator));
  return res;
}

module.exports = {
  repeater
};
