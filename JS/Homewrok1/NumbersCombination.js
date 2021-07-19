function getAllCombinations(array) {
    
    for(let i = 0; i < array.length-2; i++) {
        let start = array[i];
        for(let j = i+1; j < array.length-1; j++) {
            let middle = array[j]
            for(let k = j+1; k < array.length; k++) {
                let last = array[k];
                console.log('['+start+','+middle+','+last+']')
            }
        }
        
    }


}

getAllCombinations([1, 2, 3, 4, 5, 6])