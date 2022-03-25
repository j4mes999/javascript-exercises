const sumAll = function(num1,num2) {
  if(!validNumbers(num1,num2)) return "ERROR";
  let sum =  0;
  let minNumber = getMin(num1,num2);
  let maxNumber = getMax(num1,num2);
  for(let i = minNumber; i <= maxNumber; i++){
      sum += i;
  }
  return sum;
};

function getMin(num1,num2){
    return num1 <= num2 ? num1 : num2;
}

function getMax(num1,num2){
    return num1 >= num2 ? num1 : num2;
}

function validNumbers(num1,num2){
    if(num1 < 0 || num2 < 0) return false;
    else if(parseInt(num1) === NaN || parseInt(num2) === NaN) return false;
    else if(typeof num1 !== 'number' || typeof num2 !== 'number' ) return false;
    else return true;
}

// Do not edit below this line
module.exports = sumAll;
