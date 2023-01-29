const fibonacci = function(input) {
    if(input < 0){
        return "OOPS"
    } else {
        let a = 0;
        let b = 1;
        let c;
        for(let i = 0; i < input; i++) {
            c = b;
            b = b + a;
            a = c;
        }
        return a;
    }
};

// Do not edit below this line
module.exports = fibonacci;
