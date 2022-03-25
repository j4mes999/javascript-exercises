const reverseString = function(string) {
  let result = "";
  let index = 0;
  for(let i = string.length-1; i >= 0; i--){
    result += string.charAt(i);
    index++;
  }
  return result;
  //best solution
  //return string.split("").reverse().join(""); 
  
};

// Do not edit below this line
module.exports = reverseString;
