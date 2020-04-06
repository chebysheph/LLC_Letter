import letterArr from './array.js';
export function LLC_Letter(str, tips) {
  let arr = str.split(' ');
  arr.forEach((word, wordIndex) => {
    let wordArr = word.split(''), wordLen = wordArr.length, start = 0, strEnd = '', tmp = [];
    letterArr['arr_' + wordArr[start]].forEach((line, lineIndex) => {
      let temp = line;
      for (let i = start + 1; i < wordLen; i++) {
        temp += letterArr['arr_' + wordArr[i]][lineIndex];
      }
      tmp.push(temp);
    });
    tmp.forEach(el => {
      strEnd += el + '\n';
    });
    console.log(strEnd);
    if (wordIndex === arr.length - 1) {
      console.log(tips);
    }
  });
}


