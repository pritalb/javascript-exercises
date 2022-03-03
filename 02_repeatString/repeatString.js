const repeatString = function(str_param, num) {
	if (num < 0) {
		return 'ERROR';
	}
	
	let out = '';

	for (let index = 0; index < num; index++) {
		out = out + str_param;
	}

	return out;
};

// Do not edit below this line
module.exports = repeatString;
