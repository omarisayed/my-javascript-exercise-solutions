const add = function(...args) {
  return args.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
  }); // no need for initializer. All the array methods like reduce, map, sort, and filter can be applied directly on the rest parameters.
	
};

const subtract = function(...args) {
	return args.reduce(function(acc,curr){
    acc = acc - curr;
    return acc;
  }); // no initiliazer. All the array methods like reduce, map, sort, and filter can be applied directly on the rest parameters.
};

const sum = function(sumArray) {
	return sumArray.reduce(function(acc,curr){
    acc = acc + curr;
    return acc  
  },0) // sum initializer set to 0.
};

const multiply = function(multiArray) {
  return multiArray.reduce(function(acc,curr){
    acc = acc * curr;
    return acc;
  },1) // initializer for multiplication is 1. 0 would just multiply array by 0 and return 0.

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
