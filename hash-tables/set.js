// Hash table with keys equal to values

const mySet = new Set();

const person = { name: 'kris', age: 24 };
mySet.add(17);
mySet.add('23');
mySet.add('hello');
mySet.add({ name: 'kris', age: 24 });
mySet.add(false);
mySet.add(person);

for (const item of mySet.values()) {
	console.log({ item });
}

for (const item of mySet.keys()) {
	console.log({ item });
}

for (const [key, value] of mySet.entries()) {
	console.log({ key, value });
}
