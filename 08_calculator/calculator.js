const add = function(...args) {
  return args.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
  },0);
	
};

const subtract = function(...args) {
	return args.reduce(function(acc,curr){
    acc = acc - curr;
    return acc;
  },0);
};

const sum = function(...args) {
	return args.reduce(function(acc,curr){
    acc = acc + curr;
    return acc  
  },0)
};

const multiply = function(...args) {
  return args.reduce(function(acc,curr){
    acc = acc * curr;
    return acc;
  },0)

};

const power = function(a,b) {
  return Math.pow(a,b)
	
};

const factorial = function(number) {
  if (number < 0){
    throw new Error ('Negative factorial numbers do not exist');
  }else if (number===0){
    return 1;
  }else{
    let fact = 1;
    for (i = 1; i <= number; i++){
      fact = fact * i;
    }
    return fact;
  }
	
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
