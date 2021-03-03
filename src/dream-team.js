const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(mmbrs/* members */) {

  if (!Array.isArray(mmbrs)) return false;
  return mmbrs.map(item => {
    if (typeof(item) === 'string') {
      return item.trim()[0].toUpperCase();
    };
  }).sort().join('');
  // remove line with error and write your code here
};



function createDreamTeam(mmbrs/* members */) {
  console.log(!Array.isArray(mmbrs));
  console.log(mmbrs.map(item => {
    if (typeof(item) === 'string') {
      console.log(item.trim()[0]);
      return item.trim()[0].toUpperCase();
    }
  }).sort().join(''));
  // remove line with error and write your code here
};



createDreamTeam(['Peter', '  Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']); //'AABDEEGKPP'
// createDreamTeam([
//         'amelia',
//         'ruby',
//         'lily',
//         'grace',
//         'millie',
//         'daisy',
//         'freya',
//         'erin',
//         'megan',
//         'jasmine',
//         'brooke',
//       ]); // 'ABDEFGJLMMR'
// createDreamTeam([
//         'Amelia',
//         null,
//         undefined,
//         'Ruby',
//         'Lily',
//         11,
//         'Grace',
//         22,
//         'Millie',
//         'Daisy',
//         true,
//         'Freya',
//         false,
//         'Erin',
//         new Set([1,2,3,4,5]),
//         'Megan',
//         {
//           'John': 'Smith'
//         },
//         'Jasmine',
//         1,
//         2,
//         3,
//         4,
//         5,
//         'Brooke',
//       ]); // 'ABDEFGJLMMR'
// createDreamTeam([]);
createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]); // 'BDETV'