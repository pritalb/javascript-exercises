const getTheTitles = function(arr) {
	out = []

	arr.map((book) => {
		out.push(book['title'])
	})

	return out
};

// Do not edit below this line
module.exports = getTheTitles;
