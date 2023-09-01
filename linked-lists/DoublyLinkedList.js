class Node {
	_data;
	_prev;
	_next;

	constructor(data, next = null, prev = null) {
		this._data = data;
		this._prev = prev;
		this._next = next;
	}

	prev = () => {
		return this._prev;
	};

	next = () => {
		return this._next;
	};

	data = () => {
		return this._data;
	};

	prepend = (data) => {
		const oldPrev = this._prev;
		const prev = new Node(data, this, oldPrev);
		if (oldPrev) oldPrev._next = prev;
		this._prev = prev;
	};

	append = (data) => {
		const oldNext = this._next;
		const next = new Node(data, oldNext, this);
		if (oldNext) oldNext._prev = next;
		this._next = next;
	};

	set = (data) => {
		this._data = data;
	};
}

class DoublyLinkedList {
	_head;
	_tail;
	_length;

	constructor(data) {
		this._head = new Node(data);
		this._tail = this._head;
		this._length = 1;
	}

	prepend = (data) => {
		this._head.prepend(data);
		this._head = this._head.prev();
		this._length++;
	};

	append = (data) => {
		this._tail.append(data);
		this._tail = this._tail.next();
		this._length++;
	};

	find = (data) => {
		let node = this._head;
		while (node) {
			if (node.data() === data) break;
			node = node.next();
		}
		return node;
	};

	insert = (index, data) => {
		if (index === 0) return this.prepend(data);

		if (index >= this._length) return this.append(data);

		this._nodeAt(index - 1).append(data);
		this._length++;
	};

	remove = (index) => {
		if (index >= this._length) return;
		this._length--;

		if (index === 0) {
			this._head = this._head.next();
			this._head._prev = null;
			return;
		}

		const leader = this._nodeAt(index - 1);
		leader._next = leader.next().next();
		if (leader._next) leader._next._prev = leader;
	};

	update = (index, data) => {
		const node = this._nodeAt(index);
		node.set(data);
	};

	size = () => {
		return this._length;
	};

	debug = () => {
		console.log({ length: this._length }, this._getAllData());
	};

	_searchForward = (index) => {
		let currentNode = this._head;
		let i = 0;
		while (i < index && currentNode) {
			currentNode = currentNode.next();
			i++;
		}
		return currentNode;
	};

	_searchBackward = (index) => {
		let currentNode = this._tail;
		let i = this._length - 1;
		while (i > index && currentNode) {
			currentNode = currentNode.prev();
			i--;
		}
		return currentNode;
	};

	_nodeAt = (index) => {
		return index <= this._length / 2
			? this._searchForward(index)
			: this._searchBackward(index);
	};

	_getAllData = () => {
		const data = [];
		let currentNode = this._head;
		while (currentNode) {
			data.push(currentNode.data());
			currentNode = currentNode.next();
		}
		return data;
	};
}

// const myLinkedList = new DoublyLinkedList(17); // [17]
// myLinkedList.append(319); // [17, 319]
// myLinkedList.append(24); // [17, 319, 24]
// myLinkedList.prepend(1998); // [1998, 17, 319, 24]
// myLinkedList.insert(2, 1); // [1998, 17, 1, 319, 24]
// myLinkedList.remove(1); // [1998, 1, 319, 24]
// myLinkedList.insert(2, 23); // [1998, 1, 23, 319, 24]
// myLinkedList.update(3, 17); // [1998, 1, 23, 17, 24]
// myLinkedList.insert(0, 36); // [36, 1998, 1, 23, 17, 24]
// myLinkedList.insert(99, 319); // [36, 1998, 1, 23, 17, 24, 319]
// myLinkedList.remove(5); // [36, 1998, 1, 23, 17, 319]
// myLinkedList.debug();

module.exports = DoublyLinkedList;
