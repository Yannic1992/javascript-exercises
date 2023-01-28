const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
	let output = 0;
  input.forEach(element => {
    output += element;
  });
  return output;
};

const multiply = function(input) {
  let output = 1;
  input.forEach(element => {
    output *= element;
  });
  return output;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(x) {
	return (x > 1) ? x * factorial(x-1) : 1;
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
