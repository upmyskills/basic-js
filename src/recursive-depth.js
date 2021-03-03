const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length === 0) return 1;
      return 1 + Math.max(...arr.map(item => this.calculateDepth(item)));
    } else {
      return 0;
    }
}};




// function calculateDepth(arr) {
//   // if (Array.isArray(arr)) {

//   //   if (arr.length === 0) return 1;
//   //   return 1 + Math.max(...arr.map(item => calculateDepth(item)));
//   // } else {
//   //   return 0;
//   // }
//   let depth = 1;
//   let counter = 1;
//   for (let i of arr) {
//     if (Array.isArray(i) && arr.length > 0) {
//       counter = 1 + calculateDepth(i);
//     }
//   }

//   depth = depht > counter ? depth : counter;

//   return depth;
// }


// console.log(calculateDepth([1, 2, 3, [1], 4, 5, [1]])); //  2)
// console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []])); // 4)
// console.log(calculateDepth([[[[[]]]]])); // , 5)); // , 3);