const repeatString = function(string, num) {
    if(string == ""){
        return "";
    }else{
        if(num < 0){
            return "ERROR";
        }else if(num == 0){
            return "";
        }else if(num == 1){
            return string;
        }else{
            let newString = "";
            for(let i = 1; i <= num; i++){
                newString = newString + string;
            }
            return newString;
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
