const removeFromArray = function(array, ...num) {
    return array.filter(ele => !num.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
