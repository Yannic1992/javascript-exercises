const palindromes = function (input) {
    let regExPattern = /[^A-Za-z]/g;
    let inputRegEx = input.replace(regExPattern, "");
    let inputLowerCase = inputRegEx.toLowerCase();
    let arrayInput = [...inputLowerCase];
    let arrayReversed = arrayInput.reverse();
    let stringReversed = arrayReversed.join("");
    if(inputLowerCase === stringReversed) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
