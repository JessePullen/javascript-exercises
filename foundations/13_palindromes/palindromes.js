const palindromes = function (str) {
    newStr = str.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");

    if (newStr === reverseWord(newStr)) {
        return true;
    } else {
        return false;
    }
};

function reverseWord(str) {
    let word = str.split("");

    let reverseWord = word.reverse();

    let joinWord = reverseWord.join("");

    return joinWord;
}
// Do not edit below this line
module.exports = palindromes;
