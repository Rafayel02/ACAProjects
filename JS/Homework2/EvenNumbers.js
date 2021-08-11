function areDigitsEven(n) {
    while(n != 0) {
        let digit = n%10;
        if(digit%2 != 0) {
            return false;
        }
        n = (n-digit)/10
    }
    return true;
}

function getNumbersWithEvenDigits(a, b) {

    res = ""

    for(let i = a; i <= b; ++i) {
        if(areDigitsEven(i)) {
            res+=i+","
        }
    }

    return res == "" ? "Such numbers do not exist!" : res.substring(res.length-1, "")
}

console.log(getNumbersWithEvenDigits(19, 42))
console.log(getNumbersWithEvenDigits(99, 199))