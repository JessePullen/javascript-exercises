const fibonacci = function(num) {
    console.log('test');

    i = 0;
    newArray = [];

    while (i < num) {
        if (newArray.length < 2) {
            j = 1;
        } else {
            j = newArray[i-1] + newArray[i-2];
        }
        
        newArray.push(j);
        i++
    }

    if (num >= 0) {
        return newArray[num-1];
    } else {
        return 'OOPS'; 
    }
}

// Do not edit below this line
module.exports = fibonacci;
