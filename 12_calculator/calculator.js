const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  result = 0;
  array.forEach((item) => {
    result += item;
  })

  return result
};

const multiply = function(array) {
  result = 1;
  array.forEach((item) => {
    result *= item;
  })
  return result
};

const power = function(base, exponent) {
  if (exponent==1) {return base}
  if (exponent==0) {return 1}
  result = 1;
	for (i=1; i <= exponent; i++) {
    result *= base
  }
  return result
};

const factorial = function(num) {
  if (num<=1) {return 1}
  result = 1;
	for (i=1; i <= num; i++) {
    result *= i;
  }
  return result
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
