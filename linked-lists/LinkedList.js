class Node {
	_data;
	_next;

	constructor(data, next = null) {
		this._data = data;
		this._next = next;
	}

	next = () => {
		return this._next;
	};

	data = () => {
		return this._data;
	};

	append = (data) => {
		const next = new Node(data, this._next);
		this._next = next;
	};

	set = (data) => {
		this._data = data;
	};
}

class LinkedList {
	_head;
	_tail;
	_length;

	constructor(data) {
		this._head = new Node(data);
		this._tail = this._head;
		this._length = 1;
	}

	prepend = (data) => {
		const head = new Node(data, this._head);
		this._head = head;
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
			return;
		}

		const leader = this._nodeAt(index - 1);
		leader._next = leader.next().next();
	};

	update = (index, data) => {
		const node = this._nodeAt(index);
		node.set(data);
	};

	reverse = () => {
		if (this._length < 2) return;

		let prevNode = null;
		let currentNode = this._head;
		this._head = this._tail;
		this._tail = currentNode;
		while (currentNode) {
			const nextNode = currentNode.next();
			currentNode._next = prevNode;
			prevNode = currentNode;
			currentNode = nextNode;
		}
	};

	size = () => {
		return this._length;
	};

	debug = () => {
		console.log({ length: this._length }, this._getAllData());
	};

	_nodeAt = (index) => {
		let currentNode = this._head;
		let i = 0;
		while (i < index && currentNode) {
			currentNode = currentNode.next();
			i++;
		}
		return currentNode;
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

// const myLinkedList = new LinkedList(17);
// myLinkedList.append(319);
// myLinkedList.append(24);
// myLinkedList.prepend(1998);
// myLinkedList.insert(2, 1);
// myLinkedList.remove(1);
// myLinkedList.update(2, 17);
// myLinkedList.insert(0, 36);
// myLinkedList.insert(99, 319);
// myLinkedList.debug();
// myLinkedList.reverse();
// myLinkedList.debug();

module.exports = LinkedList;
