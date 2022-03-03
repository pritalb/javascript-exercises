const removeFromArray = function(arr) {
	out_array = [...arr];

	for (let index = 1; index < arguments.length; index++) {
		const element = arguments[index];
		
		out_array = out_array.filter((elem) => {
			return elem !== element;
		})
	}

	return out_array
};

// Do not edit below this line
module.exports = removeFromArray;
