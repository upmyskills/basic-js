const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const baseOptions = {
    repeatTimes : 1,
    separator: "+",
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|',
    ...options
  }
  let strList = [];
  let addStrList = [];
  let res = '';
  for (let i = 0; i < baseOptions.additionRepeatTimes; i++) {
    addStrList.push(String(baseOptions.addition));
  }

  for (let i = 0; i < baseOptions.repeatTimes; i++) {
    strList.push(String(str));
  }

  if (addStrList.length > 0) {
    res = strList.join(addStrList.join(baseOptions.additionSeparator)+baseOptions.separator) + addStrList.join(baseOptions.additionSeparator);
  } else {
    res = strList.join(baseOptions.separator);
  }

  return res;
};




function repeater(str, options) {
  console.log('options:', options);
  const baseOptions = {
    repeatTimes : 1,
    separator: "+",
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|',
    ...options
  }
  let strList = [];
  let addStrList = [];
  let res = '';
  for (let i = 0; i < baseOptions.additionRepeatTimes; i++) {
    addStrList.push(String(baseOptions.addition));
  }
  console.log(addStrList, addStrList.length);

  for (let i = 0; i < baseOptions.repeatTimes; i++) {
    strList.push(String(str));
  }

  if (addStrList.length > 0) {
    res = strList.join(addStrList.join(baseOptions.additionSeparator)+baseOptions.separator) + addStrList.join(baseOptions.additionSeparator);
  } else {
    res = strList.join(baseOptions.separator);
  }
  
  console.log(res);
  // console.log( (addStrList.length > 0) ? (strList.join(addStrList.join(baseOptions.additionSeparator)+baseOptions.separator) + baseOptions.addition) : strList.join(baseOptions.separator) );

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};


repeater('la', { repeatTimes: 3 }); // 'la+la+la')  
repeater('single', { repeatTimes: 1 });
repeater('12345', { repeatTimes: 5 });
repeater('la', { repeatTimes: 3, separator: 's' });
repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 });
repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });
repeater('my test string', { repeatTimes: 5, separator: '?!', addition: 'PLUS', additionRepeatTimes: 4, additionSeparator: '))' });
repeater(9.234, { repeatTimes: 4, separator: '||', addition: {a: 5}, additionRepeatTimes: 3, additionSeparator: '&&' });
repeater(-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' }); // , '-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' });  // , '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4');
repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' });  // , 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });  // , 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');  
