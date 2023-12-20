const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const resArray = [];
  const length = arr.length;
   for(let i = 0; i < length ; i++){
    switch(arr[i]){
      case '--double-next':
        if(i + 1 < length) resArray.push(arr[i + 1]);
        break;
      case '--double-prev':
        if(arr[i - 2] && arr[i - 2] == '--discard-next') {}
        else if(i - 1 >= 0) resArray.push(arr[i - 1]);
        break;
      case '--discard-next':
          i++;
        break;
      case '--discard-prev':
        if(arr[i - 2] && arr[i - 2] == '--discard-next') {}
        else if(i - 1 >= 0) resArray.pop();
        break;
      default:
        resArray.push(arr[i]);
      break;
    }
  };
  return resArray;
}

module.exports = {
  transform
};
