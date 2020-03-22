module.exports = function transform( arr ) {
   // throw 'Not implemented';
    // remove line with error and write your code here
    if(!Array.isArray(arr)) throw new Error;
    if(arr.length == 0) return arr;
    let NewArr = [];
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i++; 
        continue;
      }
      if (arr[i] === '--discard-prev') {
        if(i - 1 >= 0) NewArr.pop();
        continue;
      }
      if (arr[i] === '--double-next') {
        if(i + 1 < arr.length) NewArr.push(arr[i + 1]);
        continue;
      }
      if (arr[i] === '--double-prev') {
        if(i - 1 >= 0) NewArr.push(arr[i - 1]);
        continue;
      }
    
      NewArr.push(arr[i]);
    }
    return NewArr;

};
