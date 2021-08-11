function areDigitsOfNumberOdd(n) {
    if(n == 0) {
        return false
    }

    let digit = n%10
    if(digit%2 != 0){
       n = (n-digit)/10
       if(n == 0) {
           return true
       }
       return areDigitsOfNumberOdd(n) 
    }
    
    return false
}

console.log(areDigitsOfNumberOdd(4211133))
console.log(areDigitsOfNumberOdd(7791))
console.log(areDigitsOfNumberOdd(5))