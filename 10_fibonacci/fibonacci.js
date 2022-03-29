const fibonacci = function(fibNumber) {
  if(fibNumber < 0 ) return "OOPS";
  let a = 0;
  let b = 1;
  for(let i = 1; i < fibNumber; i++){
    let temp = b;
    b = a + temp;
    a = temp;
  }
  return b;

};

const Myfibonacci = function(fibNumber) {
    if(fibNumber < 0 ) return "OOPS";
    else if(fibNumber == 1 || fibNumber == 2) return 1;
    
    let fibList = [1,1];
    index = 2;
    while (index < fibNumber){
        fibList[index] = fibList[index - 1] + fibList[index - 2];
        index++;
    }
    return fibList[fibList.length -1];
  
  };

// Do not edit below this line
module.exports = fibonacci;
