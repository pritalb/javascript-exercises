const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }

    return sum;
};

const multiply = function(array) {
    product = 1;

    for (let index = 0; index < array.length; index++) {
        product *= array[index];
    }

    return product;
};

const power = function(base, pow) {
	return base ** pow;
};

const factorial = function(n) {
	fact = 1;

    for (let i = 1; i < n + 1; i++) {
        fact *= i;
    }

    return fact;
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
