const CustomError = require("../extensions/custom-error");

module.exports = function countCats(hiddencats/* matrix */) {
  // console.log(hiddencats);
  let cats = [];
  for (let i = 0; i < hiddencats.length; i++) {
    let newCats = hiddencats[i].filter(item => item === "^^");
    cats = [...cats, ...newCats];
  }
  // console.log(cats);
  return cats.length;
};



// function countCats(hiddencats) {
//   // console.log(hiddencats);
//   let cats = 0;
//   for (let i = 0; i < hiddencats.length; i++) {
//     let newCats = hiddencats[i].filter(item => item === "^^");
//     cats += newCats.length;
//   }
//   console.log(cats);
//   return cats;
// };


// countCats([
//         ['##', 'dd', '00'],
//         ['^^', '..', 'ss'],
//         ['AA', 'dd', 'Oo'],
//       ]);
// countCats([
//         ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//         [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//         [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//         [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//         [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//         [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//         [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//         [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
//         ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//         [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//         [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//         [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//         [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//         [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//         [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//         [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
//         ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//         [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//         [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//         [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//         [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//         [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//         [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//         [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
//         ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//         [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//         [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//         [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//         [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//         [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//         [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//         [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
//         ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//         [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//         [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//         [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//         [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//         [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//         [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//         [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
//         ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//         [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//         [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//         [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//         [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//         [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//         [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//         [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
//       ]);