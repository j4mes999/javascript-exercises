const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(values) {
  return values.reduce((total, elem) => {
    return total + elem;
  },0);
}


const multiply = function(values) {
  return values.reduce( (total, elem) =>{
    return total * elem;
  },1 );
  
};

const power = function(number, power) {
  let result = 1;
  for(let i = 1; i <= power; i++){
    result *= number;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  if(number == 0 || number == 1){
    return 1;
  }else{
    for(let i = 2; i <= number; i++){
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
