const mergeSortedArrays = (arr1, arr2) => {
	const items1 = arr1.length;
	const items2 = arr2.length;
	const totalItems = items1 + items2;
	const sorted = [];
	let i1 = 0,
		i2 = 0;

	while (sorted.length < totalItems) {
		if (i1 === items1) {
			sorted.push(arr2[i2]);
			i2++;
			continue;
		}
		if (i2 === items2 || arr1[i1] <= arr2[i2]) {
			sorted.push(arr1[i1]);
			i1++;
			continue;
		}

		sorted.push(arr2[i2]);
		i2++;
	}
	return sorted;
};

const mergeSortedArrays2 = (arr1, arr2) => {
	let i1 = 1,
		i2 = 1;
	let item1 = arr1[0],
		item2 = arr2[0];
	const sorted = [];

	const pick1 = () => {
		sorted.push(item1);
		item1 = arr1[i1];
		i1++;
	};
	const pick2 = () => {
		sorted.push(item2);
		item2 = arr2[i2];
		i2++;
	};

	while (item1 || item2) {
		if (item1 == undefined) {
			pick2();
			continue;
		}

		if (item2 == undefined || item1 <= item2) {
			pick1();
			continue;
		}

		pick2();
	}
	return sorted;
};

const result = mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]);
console.log({ result });
