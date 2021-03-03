const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor(turns * 60 * 60 / turnsSpeed)

  const res = {
    turns,
    seconds 
  };
  return res; 
}



//
// console.log(2**5 - 1); //31
// console.log((2**5 - 1) / (4074/60) * 60);
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor(turns * 60 * 60 / turnsSpeed)

  const res = {
    turns,
    seconds 
  };
  return res; 
}
// console.log(calculateHanoi(5, 4074));
console.log(calculateHanoi(36, 4750)); // {turns: 68719476735, seconds: 52082129736})
console.log(calculateHanoi(49, 4533)); // {turns: 562949953421311, seconds: 447081366052662}
console.log(calculateHanoi(5, 4074)); // {turns: 31, seconds: 27}