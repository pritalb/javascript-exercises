const sumAll = function(num1, num2) {
	if (typeof(num1) !== 'number' || typeof(num2) !== 'number'
			|| num1 < 0 || num2 < 0) {
		return 'ERROR';
	}

	let sum = 0;
	let smaller = num1;
	let bigger = num2;

	if (num2 < num1) {
		smaller = num2;
		bigger = num1;
	}

	for (let index = smaller; index < bigger + 1; index++) {
		sum += index;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
