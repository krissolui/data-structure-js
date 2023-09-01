class Node {
	_data;
	_left;
	_right;

	constructor(data) {
		this._data = data;
		this._left = null;
		this._right = null;
	}
}

class BinarySearchTree {
	_root;

	constructor() {
		this._root = null;
	}

	insert = (data) => {
		if (this._root === null) {
			this._root = new Node(data);
			return true;
		}

		let currentNode = this._root;
		while (currentNode) {
			if (data === currentNode._data) {
				return true;
			}

			if (data < currentNode._data) {
				if (!currentNode._left) {
					currentNode._left = new Node(data);
					return true;
				}
				currentNode = currentNode._left;
			} else {
				if (!currentNode._right) {
					currentNode._right = new Node(data);
					return true;
				}
				currentNode = currentNode._right;
			}
		}
		return false;
	};

	remove = (data) => {
		if (!this._root) return false;

		let parent = null;
		let currentNode = this._root;
		while (currentNode) {
			if (data < currentNode._data) {
				parent = currentNode;
				currentNode = currentNode._left;
			} else if (data > currentNode._data) {
				parent = currentNode;
				currentNode = currentNode._right;
			} else {
				let replaceNode = null;
				// option 1: no right node
				if (!currentNode._right) {
					replaceNode = currentNode._left;
				}
				// option 2: have right node
				else {
					replaceNode =
						currentNode._right._left ?? currentNode._right;
				}

				if (currentNode == parent._left) {
					parent._left = replaceNode;
				} else parent._right = replaceNode;

				return true;
			}
		}
		return false;
	};

	find = (data) => {
		if (!this._root) return false;

		let currentNode = this._root;
		while (currentNode) {
			if (data === currentNode._data) return true;

			currentNode =
				data < currentNode._data
					? currentNode._left
					: currentNode._right;
		}
		return false;
	};

	traverse = (node = this._root) => {
		let tree = {
			data: node._data,
			left: node._left ? this.traverse(node._left) : null,
			right: node._right ? this.traverse(node._right) : null,
		};
		return tree;
	};
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
bst.insert(72);
console.log({ 'expected false': bst.find(17) });
console.log({ 'expected true': bst.find(20) });
console.log(JSON.stringify(bst.traverse()));
bst.remove(20);
console.log(JSON.stringify(bst.traverse()));
// 				9
// 		4				20
// 1		6		15		170
// 							72
