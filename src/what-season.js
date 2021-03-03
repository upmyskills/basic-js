const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date/* date */) {
  const [
    summer, 
    winter, 
    autumn, 
    spring
  ] = [
    [6, 7, 8],
    [12, 1, 2],
    [9, 10, 11],
    [3, 4, 5]
  ];
  if (typeof(date) === 'undefined') return 'Unable to determine the time of year!';
  if (date.toJSON() === '') throw new CustomError('ERROR');

  const month = parseInt(date.toJSON().split('-')[1]);

  if (summer.includes(month)) return 'summer';
  if (winter.includes(month)) return 'winter';
  if (autumn.includes(month)) return 'autumn';
  if (spring.includes(month)) return 'spring';
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};


// const [ 
//   winter, 
//   spring, 
//   summer, 
//   autumn,
// ] = [
//   new Date(2019, 11, 22, 23, 45, 11, 500),
//   new Date(2018, 4, 17, 11, 27, 4, 321),
//   new Date(2017, 6, 11, 23, 45, 11, 500),
//   new Date(994, 8, 26, 3, 0, 11, 500),
// ];

// function getSeason(date/* date */) {
//   const [
//     summer, 
//     winter, 
//     autumn, 
//     spring
//   ] = [
//     [6, 7, 8],
//     [12, 1, 2],
//     [9, 10, 11],
//     [3, 4, 5]
//   ];
//   // console.log(`
//   //   summer = ${summer},\n
//   //   winter = ${winter},\n
//   //   autumn = ${autumn},\n
//   //   spring = ${spring},\n
//   // `);
//   // console.log(date, 'date:', typeof(date.toJSON), date.toDateString());
//   console.log(date.toJSON().split('-'));
//   if (date.toJSON() === '') throw Error('ERROR');
//   const month = parseInt(date.toJSON().split('-')[1]);
//   console.log(month);

//   if (summer.includes(month)) return 'summer';
//   if (winter.includes(month)) return 'winter';
//   if (autumn.includes(month)) return 'autumn';
//   if (spring.includes(month)) return 'spring';
//   // throw new CustomError('Not implemented');
//   // remove line with error and write your code here
// };

// getSeason(winter);
// // getSeason(spring);
// // getSeason(summer);
// // getSeason(autumn);

// const deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   }
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// try {
//   getSeason(deeperFakeDate)
// } catch(err) {
//   if (err._validationProp === 'NA') {
//       this.skip();
//     } else {
//       res = 'THROWN';
//     }
// }

// console.log(getSeason(autumn));
