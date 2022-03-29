const palindromes = function (string) {
    let arrayStr = string.toLowerCase().split("");
    const onlyAz = arrayStr.filter( char => /[a-zA-Z]/.test(char));
    const arrayNormalized = onlyAz.map( x => x);
    onlyAz.reverse();
    return arrayNormalized.toString() === onlyAz.toString() ? true : false; 
    
};

// Do not edit below this line
 module.exports = palindromes;
