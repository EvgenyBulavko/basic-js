module.exports = class DepthCalculator {
    
        //throw 'Not implemented';
        // remove line with error and write your code here
        globalres = 1;
        calculateDepth = arr => {
            let result;
            if (arr.some(elem => Array.isArray(elem))) {
                this.globalres += 1;
                return this.calculateDepth(arr.flat())
            }
            result = this.globalres;
            this.globalres = 1;
            return result;
        };
    
};