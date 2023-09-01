const LinkedList = require('../linked-lists/LinkedList');

class Stack {
	_list;

	constructor(data) {
		this._list = new LinkedList(data);
	}

	push = (data) => {
		this._list.prepend(data);
	};

	pop = () => {
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

const myStack = new Stack(71); // [71]
myStack.push(29); // [29, 71]
myStack.push(990); // [990, 29, 71]
myStack.debug();
console.log({ 'expected 990': myStack.pop() }); // [29,71]
console.log({ 'expected 29': myStack.peek() });
myStack.push(36); // [36, 29, 71]
myStack.push(85); // [85, 36, 29, 71]
myStack.debug();
console.log({ 'expected false': myStack.find(990) });
console.log({ 'expected true': myStack.find(36) });
