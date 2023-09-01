class HashTable {
	_memory;
	constructor(size) {
		this._memory = new Array(size);
	}

	/**
	 * Hash key to get memory address
	 * @param {string} key key of item
	 * @returns hashed value of key
	 */
	_hash = (key) => {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this._memory.length;
		}
		return hash;
	};

	set = (key, value) => {
		const address = this._hash(key);
		if (!this._memory[address]) this._memory[address] = [];
		this._memory[address].push([key, value]);
	};

	get = (key) => {
		const address = this._hash(key);
		const bucket = this._memory[address];
		if (bucket) {
			for (let item of bucket) {
				if (item[0] === key) return item[1];
			}
		}
		return undefined;
	};

	keys() {
		const allKeys = [];
		this._memory
			.filter((bucket) => bucket)
			.forEach((bucket) => {
				bucket.forEach((item) => {
					allKeys.push(item[0]);
				});
			});
		return allKeys;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
console.log({ grapes: myHashTable.get('grapes') });
console.log({ apples: myHashTable.get('apples') });
console.log({ oranges: myHashTable.get('oranges') });
console.log({ bananas: myHashTable.get('bananas') });
console.log({ keys: myHashTable.keys() });
