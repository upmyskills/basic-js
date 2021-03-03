const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(data/* sampleActivity */) {
  const sampleActivity = (typeof(data) !== 'string' || +data > MODERN_ACTIVITY || +data <= 0) ? false : +data;
  const res = sampleActivity ? Math.ceil((Math.log((MODERN_ACTIVITY / sampleActivity))) / (0.693 / HALF_LIFE_PERIOD)) : false;

  return res;
};




function dateSample(data/* sampleActivity */) {
  const calc = () => {
    const t_1st = MODERN_ACTIVITY / sampleActivity;
    const t_2nd = 0.693 / HALF_LIFE_PERIOD;
    const res = Math.ceil((Math.log(t_1st)) / t_2nd);
    // (Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD))
    return res;
  }
  console.log('Input: ', typeof(data));
   const sampleActivity = (typeof(data) !== 'string' || parseInt(data) > MODERN_ACTIVITY || parseInt(data) <= 0) ? false : +data;
  console.log('Activity: ', sampleActivity, typeof(sampleActivity));
  console.log(parseInt(data) > 15);
  const res = sampleActivity ? calc() : false;
  console.log('Res: ', res);

  return +res;
};

dateSample('15.1');
