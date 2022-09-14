const sumAll = function(...input) {
    if(input.every(ele => typeof ele === "number") && 
       input.every(value => value > 0)){
        if(input[0] > input[1]) input.sort();
        return ((input[1]-input[0])+1)*(input[0]+input[1])/2; 
    }else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
