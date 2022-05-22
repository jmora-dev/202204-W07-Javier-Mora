export const validateIntegerBetweenCeroAndTen = (number) => {
	if (!Number.isInteger(number)) {
		throw TypeError('Must be an integer');
	}
	if (number < 0 || number > 10) {
		throw TypeError('Must be between 0 and 10');
	}
	return number;
};
