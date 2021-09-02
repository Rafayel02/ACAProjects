// 1
function arrayFlattener(arr, res = []) {
    if(arr.length === 0) {
        return res
    }
    Array.isArray(arr[0]) ? arrayFlattener(arr[0], res) : res.push(arr[0])
    return arrayFlattener(arr.slice(1), res)
}

console.log("-1-")
console.log(arrayFlattener([1, [3, 4], [1, 2], 10]))
console.log(arrayFlattener([14, [1, [[[3, []]]], 1], 0]))
console.log("---")
//

//2
function digitsSum(num) {
    if(num%10 === num) {
        return num
    }

    let sum = 0
    while(num !== 0) {
        sum += num % 10
        num = (num-(num % 10))/10
    }

    return digitsSum(sum)
}

console.log("-2-")
console.log(digitsSum(14))
console.log(digitsSum(29))
console.log(digitsSum(999999999999))
console.log("---")
//

//3
function keyValueChange(obj) {
    let res = {}
    
    for (key in obj) {
        let value = obj[key] 

        if(res[value] === undefined) {
            res[value] = key
        } else if(!Array.isArray(res[value])) {
            let temp = res[value]
            res[value] = []
            res[value].push(temp)
            res[value].push(key)
        } else {
            res[value].push(key)
        }

    }

    return res
}

console.log("-3-")
console.log(keyValueChange({ a: '1', b: '2' }))
console.log(keyValueChange({ a: '1', b: '2', c: '2'}))
console.log(keyValueChange({ a: '1', b: '2', c: '2', d:'2'}))
console.log("---")
//

//4
function subStringWithCount(str, count) {
    if(str.length < count) {
        return "No substrings with this count!"
    }
    res = []
    for(let i = 0; i <= str.length - count; i++) {
        res.push(str.substring(i, i+count))
    }
    return res
}

console.log("-4-")
console.log(subStringWithCount('495215', 3))
console.log(subStringWithCount('abcdfghz', 7))
console.log("---")
//

//5
function missingNumbersSequence(arr) {
    let max = arr[0]
    let min = arr[0]
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    
    let count = max - min - 1
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > min && arr[i] < max) {
            count --
        }
    }

    return count
}

console.log("-5-")
console.log(missingNumbersSequence([0, 8]))
console.log("---")
//

//6
function possibleSubsets(arr, count) {

    

}

console.log("-6-")
console.log(possibleSubsets())
console.log("---")
//