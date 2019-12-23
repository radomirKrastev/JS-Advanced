function countWords(textArr){
let wordsObj = {};

let text = textArr[0];
var matches = text.match(/\w+/g);

for (let word of matches){
    if(!wordsObj[word]){
        wordsObj[word] = 0;
    }

    wordsObj[word]++;
}

console.log(JSON.stringify(wordsObj));
}

countWords(["Far too slow, you're far too slow."]);