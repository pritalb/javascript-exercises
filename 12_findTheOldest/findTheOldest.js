const findTheOldest = function(people) {
	const currentYear = new Date().getFullYear()
	let oldest = {}
	
	people.reduce((oldestAge, person) => {
		let age = (person.yearOfDeath === undefined) ? currentYear - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth

		if (age > oldestAge) {
			oldest = person
			return age
		} else {
			return oldestAge
		}

	}, 0)

	return oldest
};


// Do not edit below this line
module.exports = findTheOldest;
