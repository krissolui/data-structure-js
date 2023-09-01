const LinkedList = require('../linked-lists/LinkedList');

class Queue {
	_list;

	constructor(data) {
		this._list = new LinkedList(data);
	}

	enqueue = (data) => {
		this._list.append(data);
	};

	dequeue = () => {
		if (!this._list._head) return null;

		const head = this._list._head.data();
		this._list.remove(0);
		return head;
	};

	peek = () => {
		return this._list._head.data();
	};

	find = (data) => {
		const node = this._list.find(data);
		return node != null;
	};

	debug = () => {
		this._list.debug();
	};
}

const myQueue = new Queue(71); // [71]
myQueue.enqueue(29); // [71, 29]
myQueue.enqueue(990); // [71, 29, 990]
myQueue.debug();
console.log({ 'expected 71': myQueue.dequeue() }); // [29, 990]
console.log({ 'expected 29': myQueue.peek() });
myQueue.enqueue(36); // [29, 990. 36]
myQueue.enqueue(85); // [29, 990. 36, 85]
console.log({ 'expected 29': myQueue.dequeue() }); // [990. 36, 85]
myQueue.debug();
console.log({ 'expected true': myQueue.find(990) });
console.log({ 'expected false': myQueue.find(29) });
