const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    const addValue = String(value);
    if(addValue) this.array.push(`( ${addValue} )`);
    else this.array.push('()');
    return this;
  },
  removeLink(position) {
    if(this.array[position - 1]) {
      this.array.splice(position - 1,1);
      return this;
    }
    this.array = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const resultStr = this.array.join('~~');
    this.array = [];
    return resultStr;
  }
};

module.exports = {
  chainMaker
};
