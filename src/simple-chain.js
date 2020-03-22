const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" ||
			this.chain.length < position || position <= 0) {
			this.chain = [];
			throw new Error();
		} else {
			this.chain.splice(position - 1, 1);
		}
		return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let resChain = '' 
    this.chain.forEach((el, i) => {
     resChain += (i < this.chain.length - 1) ? `( ${el} )~~` : `( ${el} )`;
    });
    this.chain = [];
    return resChain;
  }
};

module.exports = chainMaker;
