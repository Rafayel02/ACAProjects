function getMinimumPositiveFromArray(arr) {
    return getMinimal(arr, arr[0])
}

function getMinimal(arr, smallest) {    
    if(arr.length == 0) {
        if(smallest < 0 || smallest == undefined) {
            return -1
        }
        return smallest
    }

    arr = arr.slice(1, arr.length)
    if(arr[0] >= 0) {
        if(arr[0] < smallest) {
            smallest = arr[0]
        }
    }
    
    return getMinimal(arr, smallest)
}

console.log(getMinimumPositiveFromArray([56, -9, 87, -23, 0, -105, 55, 1]))
console.log(getMinimumPositiveFromArray([45, -9, 15, 5, -78]))
console.log(getMinimumPositiveFromArray([-5, -9, -111, -1000, -7]))