const removeFromArray = function(array, ...theArgs) {
    let arrayResult = [];
    for(const elemArgs of theArgs){
        arrayResult = array.filter(elem => elem !== elemArgs);
        array = arrayResult;
    }
    return arrayResult;

};

// Do not edit below this line
module.exports = removeFromArray;
