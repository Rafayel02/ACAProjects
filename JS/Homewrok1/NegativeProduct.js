function productOfArrayNegativeElements(array) {

    if(array.length === 0) {
        return "invalid";
    }

    let res = undefined;
    let resInit = false;

    for(let i = 0; i < array.length; i++) {
        if(!Array.isArray(array[i])) {
            return "invalid";
        }

        tempArray = array[i];
        let tempNegative = 0
        for(let j = 0; j < tempArray.length; j++) {
            if(tempArray[j] < 0) {
                if(tempNegative === 0 || tempNegative < tempArray[j]) {
                    tempNegative = tempArray[j];
                }
            }
        }

        if(tempNegative != 0) {
            if(!resInit) {    
                res = 1;           
                resInit = true;   
            }
            res*=tempNegative;
        }

    }

    if(res == undefined) {
        return "No negative";
    }
    return res;


}

console.log(productOfArrayNegativeElements([[1, -1, 3], [-2, -3, -4], [-10, -11, -12]]))
console.log(productOfArrayNegativeElements([[3, 4], [5, 4, 6], [10, 4, 3, 0]]))
console.log(productOfArrayNegativeElements([1, 2, 3]))