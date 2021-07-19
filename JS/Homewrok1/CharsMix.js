function mixChars(string) {
    let chars = Array.from(string);
    let result = '';

    for(let i = 0; i < chars.length; i+=3) {
        if(chars[i+2] !== undefined) { // 3 hat ka
            result += chars[i+1]+chars[i+2]+chars[i];
        } else{
            result += chars[i];
            if(chars[i+1] !== undefined) {
                result += chars[i+1]
            }
        }
    }
    return result;
}

console.log(mixChars("yMiiag"))