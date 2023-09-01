//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const firstRecurringCharacterSet = (input) => {
	const set = new Set();
	for (const item of input) {
		if (set.has(item)) return item;
		set.add(item);
	}
	return undefined;
};

const firstRecurringCharacterMap = (input) => {
	const map = new Map();
	for (const item of input) {
		if (map.has(item)) return item;
		map.set(item, item);
	}
	return undefined;
};

const firstRecurringCharacterObject = (input) => {
	if (input.length < 2) return undefined;

	const obj = {};
	for (const item of input) {
		if (obj[item] !== undefined) return item;
		obj[item] = item;
	}
	return undefined;
};

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
console.log({
	'expected result = 2: ': firstRecurringCharacterMap([
		2, 5, 1, 2, 3, 5, 1, 2, 4,
	]),
});
console.log({
	'expected result = 1: ': firstRecurringCharacterMap([
		2, 1, 1, 2, 3, 5, 1, 2, 4,
	]),
});
console.log({
	'expected result = undefined: ': firstRecurringCharacterMap([2, 3, 4, 5]),
});
console.log({
	'expected result = 5: ': firstRecurringCharacterMap([
		2, 5, 5, 2, 3, 5, 1, 2, 4,
	]),
});
