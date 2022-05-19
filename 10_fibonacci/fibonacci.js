// returns a list of first n fibonacci numbers
const fibonacciSequence = (n) => {
	let fibs = [1, 1]

	while (fibs.length < n) {
		let currentFibs = fibs.length
		fibs.push(fibs[currentFibs - 1] + fibs[currentFibs - 2])
	}

	return fibs
}

const fibonacci = function(num) {
	const n = Number(num)

	if (n < 0) {
		return 'OOPS'
	}

	const fibs = fibonacciSequence(n)

	return fibs[n - 1]
};


// Do not edit below this line
module.exports = fibonacci;
