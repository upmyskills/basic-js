const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const controlSequenceActions = {
    '--discard-next' : function(index) { if (arr.length > index + 2) return (arr[index + 2] === '--discard-prev') ? index  : index + 1 },
    '--discard-prev' : function(index) { if (resArr.length > 0) resArr.pop(); return index },
    '--double-next' : function(index) { if (arr.length > index + 1) resArr.push(arr[index + 1]); return index },
    '--double-prev' : function(index) { if (arr.length > index - 1 && index - 1 > 0 && arr[index - 2 ] !== '--discard-next') resArr.push(arr[index - 1]); return index }
  };

  const controlSequence = Object.keys(controlSequenceActions);

  let resArr = [];

  if (!Array.isArray(arr)) throw new Error('THROWN');

  for (let i = 0; i < arr.length; i++) {
    if (controlSequence.includes(arr[i])) {
      i = controlSequenceActions[arr[i]](i);
    }
    else {
      resArr.push(arr[i]);
    }
  }
  return resArr;
};



function transform(arr) {
  const controlSequenceActions = {
    '--discard-next' : function(index) { if (arr.length > index + 2) return (arr[index + 2] === '--discard-prev') ? index : index + 1 },
    '--discard-prev' : function(index) { if (resArr.length > 0) console.log('DISCARD-PREV:', resArr.pop()); return index },
    '--double-next' : function(index) { if (arr.length > index + 1) resArr.push(arr[index + 1]); return index },
    '--double-prev' : function(index) { if (arr.length > index - 1 && index - 1 > 0 && arr[index - 2 ] !== '--discard-next') resArr.push(arr[index - 1]); return index }
  };

  const controlSequence = Object.keys(controlSequenceActions);

  let resArr = [];
  let lastAction = '';

  if (!Array.isArray(arr)) throw new Error('THROWN');

  for (let i = 0; i < arr.length; i++) {
    console.log('GIVE:', arr[i]);
    if (controlSequence.includes(arr[i])) {
      i = controlSequenceActions[arr[i]](i);
    }
    else {
      console.log('PUSH:', arr[i]);
      resArr.push(arr[i]);
    }
  }
  console.log('resArr:', resArr);
  return resArr;
};

// transform(1);

// transform([1, 2, 3, '--double-next', 4, 5]);  // [1, 2, 3, 4, 4, 5]
// transform([1, 2, 3, '--discard-prev', 4, 5]); // [1, 2, 4, 5]

// console.log('basic sequence interactions work well');
// transform(['--discard-prev', 1, 2, 3]);    // [1, 2, 3]
// transform(['--double-prev', 1, 2, 3]);
// transform([1, 2, 3, '--double-next']);
// transform([1, 2, 3, '--discard-next']); 
// console.log('__________________________') 


transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]); // [1, 2, 3, 4, 5]
// transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]); //  [1, 2, 3, 1337, 1337, 1337, 4, 5]
// transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]); // [1, 2, 3, 4, 5]
// transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]); // [1, 2, 3, 1337, 4, 5]
// transform(['--discard-next', false, '--discard-prev', 22, '--discard-prev',
//             '8.963', '--discard-next', 'DEF', '--discard-prev', 1, '--discard-next',
//             0, '--discard-next', 1, '--discard-next', 1.233, '--discard-next', '8.963', NaN,
//             { John: 'Smith' }, [ 'somebody', 'told', 'me' ], 'DEF', true, false, 1, false, '--double-prev'
// ]); // [ '8.963', 1, NaN, { John: 'Smith' }, [ 'somebody', 'told', 'me' ], 'DEF', true, false, 1, false, false,]
