const reverseString = function(str) {
	let out = '';

	for (let index = 0; index < str.length; index++) {
		out = str[index] + out;
	}

	return out;
};

// Do not edit below this line
module.exports = reverseString;
