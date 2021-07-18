function longestSubString(sentence) {

    let chars = Array.from(sentence);
    let resultList = new Array();
    let counter = 0;

    for(let i = 0; i < chars.length-1; i++) {
        let tempChar = chars[i];

        let tempWord = tempChar;

        for(let j = i+1; j < chars.length; j++) {
            if(chars[j] !== ' ' && tempWord.includes(chars[j]) ) {
                break;
            }
            tempWord+=chars[j];
        }

        if(tempWord.length >= (sentence.length/2)+1) {
            return tempWord;
        }

        resultList[counter] = tempWord;
        counter++;
    }

    resultList.sort((a, b) => a.length - b.length);
    return resultList[resultList.length-1];
}
console.log(longestSubString("abcdeafghijaklmanoapqrastauvayxawza"));
console.log(longestSubString("there are no two words in the english language more harmful than \'good job\'"));
console.log(longestSubString("parting your soup is not a miracle, bruce."))