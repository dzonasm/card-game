//create random logic.
//random idx between 0 and y, idx cannot repeat itself
//while an array length is not y.length, new array.push old array[random idx] if random nums array contains random idx, return
//y is the length old array

export const randomRecursive = (arrayToRandomize, guessArr = [], newArr = []) => {
	if (newArr.length === arrayToRandomize.length) return newArr;

	const randomIdx = Math.round(Math.random() * (arrayToRandomize.length - 1));
	if (guessArr.includes(randomIdx)) return randomRecursive(arrayToRandomize, guessArr, newArr);
	newArr.push(arrayToRandomize[randomIdx]);
	guessArr.push(randomIdx);
	return randomRecursive(arrayToRandomize, guessArr, newArr);
};
