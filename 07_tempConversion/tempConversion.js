const ftoc = function(temp) {
  return roundNumber((temp - 32) * (5/9));
};

const ctof = function(temp) {
  return roundNumber(temp * 9/5 + 32 );
};

function roundNumber(numb){
  return Math.round(numb * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
