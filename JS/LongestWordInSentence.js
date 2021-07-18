function getLongestWordFromSentence(sentence) {
    sentence = sentence.replace(/,/g, '');
    sentence = sentence.replace('.', '');

    let wordsArray = sentence.split(" ");
    wordsArray.sort((a, b) => a.length - b.length);

    return wordsArray[wordsArray.length-1];
}   

console.log(getLongestWordFromSentence("Testing, testing, here now."))