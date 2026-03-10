const reverseString = function(word) {
    let wordArray = []
    for (let i = 0; i < word.length; i++)  {
        wordArray.push(word[i]);
    }
    wordArray.reverse();
    return wordArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
