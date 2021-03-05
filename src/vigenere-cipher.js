const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (linearMode) {
    this.mode = linearMode === false;
    this.checkData = (msg, key) => {if (typeof(msg) === 'undefined' || typeof(key) == 'undefined') throw new Error('Wrong data!');}
    this.lettersTemplate = /[A-Z]/;
  }

  encrypt(msg, key) {
    // console.log('Encrypt start!\n', msg, key);
    this.checkData(msg, key);
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const lettersList =  msg.toUpperCase().split('');
    const keyLettersList = key.toUpperCase().split('');
    let encryptWord = [];

    // console.log(lettersList);
    // console.log(keyLettersList, keyLettersList.length);
    let index = 0;
    for (let letter of lettersList) {
      if (letter.match(this.lettersTemplate)) {
        const letterCharCode = letter.charCodeAt();
        const keyCharCode = keyLettersList[index % keyLettersList.length].charCodeAt();
        const shiftTo = (keyCharCode - 65); 

        const newLetter = ((shiftTo + letterCharCode) > 90) ? (65 + (shiftTo + letterCharCode) - 91) : (shiftTo + letterCharCode);
        
        encryptWord.push(String.fromCharCode(newLetter));
        index++;
        continue;
      }
      encryptWord.push(letter);
      // console.log(letter, letter.charCodeAt(), index, '>>>', 
      //               keyLettersList[index%keyLettersList.length], 
      //               keyLettersList[index%keyLettersList.length].charCodeAt(),
      //               shiftTo, '>>>', String.fromCharCode(newLetter), '==', newLetter);

    //   TEST
    //
    //   let matrix = [];     
    //   for (let i = 65; i <= 90; i++) {
    //     let array = [];
    //     for (let j = 0; j <= 25; j++) {
    //       let s = ((i + j) > 90) ? 65 + ((i + j) - 91) : i + j;
    //       array.push(String.fromCharCode(s));
    //     }
    //     matrix.push(array);
    //   }
    //   console.log('Rigth letter:', matrix[letterCharCode - 65][keyCharCode - 65]);
    //   console.log(matrix);
    };

    // console.log(`Encrypt(${this.mode}):` , this.mode ? encryptWord.join('') : encryptWord.reverse().join(''));
    if (this.mode) return encryptWord.reverse().join('');
    return encryptWord.join('');
  }    
  decrypt(msg, key) {
    console.log('Decrypt start!\n', msg, key);
    this.checkData(msg, key);
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const cryptLettersList = msg.toUpperCase().split('');
    const decryptLettersList = key.toUpperCase().split('');

    // console.log(cryptLettersList, decryptLettersList)

    let decryptWords = [];

    let index = 0;
    for (let letter of cryptLettersList) {
      if (letter.match(this.lettersTemplate)) {
        const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // const letterCharCode = letter.charCodeAt();
        const keyCharCode = decryptLettersList[index % decryptLettersList.length]; // decryptLettersList[index % decryptLettersList.length].charCodeAt();
        const shiftTo = alph.indexOf(keyCharCode);// (keyCharCode > letterCharCode) ? (keyCharCode - letterCharCode) : (letterCharCode - keyCharCode); 
        const line = alph.slice(shiftTo) + alph.slice(0, shiftTo);
        

        const letterCharCode = line.indexOf(letter);
        const newLetter = alph[letterCharCode];
        // console.log(line, letterCharCode, newLetter);

        // (65 + shiftTo); // (shiftTo >= 0) ? (65 + shiftTo) : (91 + shiftTo);
        // ((letterCharCode + letterCharCode) >= 90) ? ((shiftTo + letterCharCode) - 91) : (shiftTo + letterCharCode);
        // console.log(`(${shiftTo} >= 0) ? (65 + ${shiftTo}) : (91 + ${shiftTo})`);
        // console.log(letter, letterCharCode, keyCharCode, shiftTo, '===>', newLetter, String.fromCharCode(newLetter));
        
        decryptWords.push(newLetter);
        index++;
        continue;
      }
      decryptWords.push(letter);
    }
    // console.log(decryptWords);
    // console.log(`Decrypt(${this.mode}):`, this.mode ? decryptWords.reverse().join('') : decryptWords.join(''));
    // return this.mode ? decryptWords.join('') : decryptWords.reverse().join('');
    // console.log(`Decrypt(${this.mode}):`, decryptWords.join(''));
    // if (this.mode === false) return decryptWords.reverse().join('')
    return this.mode ? decryptWords.reverse().join('') : decryptWords.join('');
  }
}

module.exports = VigenereCipheringMachine;



const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
// const directMachine = new VigenereCipheringMachine();
//directMachine.encrypt(); // 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'););
directMachine.decrypt('*)@H3Y|', 'JSQIGNBN');// , 'LEARN FRONTEND DEVELOPMENT :)'); //, 'LEARN FRONTEND DEVELOPMENT :)');
// -CJQ8FD%86BEZF%QXR@.F-1&PH
// +CMV8MK%86PIJU%QFRN.F-1&PH



directMachine.encrypt('attack at dawn!', 'alphonse');
directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js');
directMachine.decrypt('a', 'z');
directMachine.decrypt('z', 'a');

// 1111111111111
const testStr = '70';
const testKey = 'SS';

let encrypted = directMachine.encrypt(testStr, testKey);
directMachine.decrypt(encrypted, testKey); // testStr
console.log('-- double-sided direct cryptography --');
directMachine.decrypt('CVXY,^N&&QCT8Y&CVH|WY.', 'WMLMSECFDQCIDTQPYEPLAU');
reverseMachine.decrypt('IKHOLY', 'GDNJML');
directMachine.decrypt('R@@@@B', 'DD');

console.log('--------------------------');
// 2222222222222
console.log('-- double-sided direct cryptography 2 --');
const reversedTestStr = testStr.split('').reverse().join(''); // 07
// const testKey = 'VL';
encrypted = reverseMachine.encrypt(reversedTestStr, testKey);
const reversedEncrypted = encrypted.split('').reverse().join('');
reverseMachine.decrypt(reversedEncrypted, testKey); //testStr


// reverseMachine.encrypt('attack at dawn!', 'alphonse') // => '!ULLD XS XQHIEA'
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') // => '!NWAD TA KCATTA'