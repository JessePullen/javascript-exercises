const removeFromArray = function(array, ...items) {
    for (item of items) {
        let index = array.indexOf(item);
        if (array.includes(item)) {
            array.splice(index, 1);
        } else {
            continue
        }
    } 
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
