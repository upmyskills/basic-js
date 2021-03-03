const CustomError = require("../extensions/custom-error");


const chainMaker = {
  chainsList : [],
  getLength() {
    this.chainsList.length;
    return this;
  },
  addLink(value) {
    this.chainsList.push(''+value);
    return this;
  },
  removeLink(position) {
    if (this.chainsList.length < position || position < 0) {
      this.chainsList = [];
      throw new Error("ERROR!");
    };
    this.chainsList = [...this.chainsList.slice(0, position - 1), ...this.chainsList.slice(position)];;
    return this;
  },
  reverseChain() {
    this.chainsList.reverse();
    return this;
  },
  finishChain() {
    const res = '( ' + this.chainsList.join(' )~~( ') + ' )'
    this.chainsList = [];
    return res;
  }
};


module.exports = chainMaker;

// chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).finishChain(); // '( 3rd )~~( function() {} )'
// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(); // '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(); 
// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )

// const chainMakerTest = {
//   chainsList : [],
//   getLength() {
//     this.chainsList.length;
//     return this;
//   },
//   addLink(value) {
//     this.chainsList.push(''+value);
//     return this;
//   },
//   removeLink(position) {
//     this.chainsList = [...this.chainsList.splice(0, position), ...this.chainsList(position + 1)]
//     return this;
//   },
//   reverseChain() {
//     this.chainsList.reverse();
//     return this;
//   },
//   finishChain() {
//     console.log(this.chainsList.join('~~'));
//     return this
//   }
// };


// chainMakerTest.addLink(555).finishChain();

// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(); 
// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
