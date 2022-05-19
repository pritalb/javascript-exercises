const toAlphabetic = (str) => {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'
	const symbols = '!@#$%^&*()_+=-;:\'\",.<>/?\\|'
	const strLower = str.toLowerCase()
	let out = ''

	for (let index = 0; index < strLower.length; index++) {
		const currentLetter = strLower[index];

		if ((alphabets.search(currentLetter) !== -1) && symbols.search(currentLetter) === -1 ) {
			out += currentLetter;
		}
	}

	return out
}

const reverseString = (str) => {
	out = ''

	for (let index = str.length - 1; index >= 0; index--) {
		out += str[index]
	}

	return out
}

const palindromes = function (str) {
	const onlyLettersStr = toAlphabetic(str)

	return onlyLettersStr === reverseString(onlyLettersStr)
};

// Do not edit below this line
module.exports = palindromes;
