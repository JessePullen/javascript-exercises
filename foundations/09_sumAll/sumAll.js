const sumAll = function(num1, num2) {
    let sum = 0;
    
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }

    if (num1 > num2) {
        endingNum = num1;
        startingNum = num2
    } else  {
        startingNum = num1;
        endingNum = num2;
    }

    for (startingNum; startingNum <= endingNum; startingNum++) {
        sum += startingNum;    
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
