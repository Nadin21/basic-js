const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }
  checkUndefine(val) {
    return val === undefined;
  }
  encrypt(str, key) {
    if(this.checkUndefine(str) || this.checkUndefine(key)) throw new Error('Incorrect arguments!');
    let j = 0,
      resStr = '',
      lengthKey = key.length;
    str = str.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      let charCode = str[i].charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        const code = ((charCode - 65) + (key[j % lengthKey].charCodeAt() - 65)) % 26;
        resStr += String.fromCharCode(code + 65);
        j++;
      }
      else resStr += str[i];
    }
    if (!this.flag) resStr = [...resStr].reverse().join('');
    return resStr;
  }
  decrypt(str, key) {
    if(this.checkUndefine(str) || this.checkUndefine(key)) throw new Error('Incorrect arguments!');
    let j = 0,
      resStr = '',
      lengthKey = key.length;
    str = str.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      let charCode = str[i].charCodeAt();

      if (charCode >= 65 && charCode <= 90) {
        const code = (25 - (charCode - key[j % lengthKey].charCodeAt())) % 26;
        resStr += String.fromCharCode(90 - code);
        j++;
      }
      else resStr += str[i];
    }
    if (!this.flag) resStr = [...resStr].reverse().join('');
    return resStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
