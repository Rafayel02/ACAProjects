function getArray(arr, n) {
    let filteredArray = arr.filter(e => e > n)
    return (filteredArray.length == 0) ? "Such values do not exist!" : filteredArray
}

console.log(getArray([10, 25, 16, -5, 30, 15, 24], 16))
console.log(getArray([1, 1, 2, -3, 0, 8, 4, 0], 9))