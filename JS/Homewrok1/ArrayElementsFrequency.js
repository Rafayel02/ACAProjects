function countFrequancy (arr){
    let hashMap = new Map();

    for(let i = 0; i < arr.length; i++) {
        if(!(hashMap.has(arr[i]))) {
            // Init
            hashMap.set(arr[i], 1);
        } else {
            // Increment
            let tempValue = hashMap.get(arr[i]);
            tempValue++;
            hashMap.set(arr[i], tempValue);
        }
    }
    printMap(hashMap);
}

function printMap(hasMap) {
    const keys = hasMap.keys();
    let tempKey = keys.next().value;

    while(tempKey != undefined) {
        console.log(tempKey+": "+hasMap.get(tempKey)/arr.length);
        tempKey = keys.next().value;
    }
}

let arr = [1, 1, 2, 3, -1, -1, -1, -1, 0, 0, 2];
countFrequancy(arr);