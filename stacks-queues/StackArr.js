class Stack {
	_list;

	constructor(data) {
		this._list = new Array();
		this._list.push(data);
	}

	push = (data) => {
		this._list.push(data);
	};

	pop = () => {
		return this._list.pop();
	};

	peek = () => {
		return this._list[this._list.length - 1];
	};

	find = (data) => {
		return this._list.find((item) => item === data) != null;
	};

	debug = () => {
		console.log({ length: this._list.length }, this._list);
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
