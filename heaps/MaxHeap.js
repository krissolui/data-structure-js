class MaxHeap {
	queue;

	constructor() {
		this.queue = [];
	}

	_getParentIndex = (i) => {
		return Math.floor((i - 1) / 2);
	};

	_getLeftChildIndex = (i) => {
		return i * 2 + 1;
	};

	_getRightChildIndex = (i) => {
		return i * 2 + 2;
	};

	_swap = (i, j) => {
		const tmp = this.queue[i];
		this.queue[i] = this.queue[j];
		this.queue[j] = tmp;
	};

	insert = (n) => {
		this.queue.push(n);
		let i = this.queue.length - 1;
		while (i > 0) {
			const parentIndex = this._getParentIndex(i);
			if (n <= this.queue[parentIndex]) break;

			this._swap(i, parentIndex);
			i = parentIndex;
		}
	};

	remove = () => {
		const max = this.queue[0];
		const replacement = this.queue.pop();
		this.queue[0] = replacement;

		let i = 0;
		while (true) {
			const leftChildIndex = this._getLeftChildIndex(i);
			const rightChildIndex = this._getRightChildIndex(i);
			if (leftChildIndex >= this.queue.length) break;

			const maxChildIndex =
				rightChildIndex < this.queue.length &&
				this.queue[rightChildIndex] > this.queue[leftChildIndex]
					? rightChildIndex
					: leftChildIndex;
			if (replacement >= this.queue[maxChildIndex]) break;
			this._swap(i, maxChildIndex);
			i = maxChildIndex;
		}

		return max;
	};

	peek = () => {
		return this.queue[0];
	};
}

const priorityQueue = new MaxHeap();
priorityQueue.insert(40);
console.log(priorityQueue.queue); // [40]
priorityQueue.insert(55);
console.log(priorityQueue.queue); // [55, 40]
priorityQueue.insert(20);
console.log(priorityQueue.queue); // [55, 40, 20]
priorityQueue.insert(32);
console.log(priorityQueue.queue); // [55, 40, 20, 32]
priorityQueue.insert(41);
console.log(priorityQueue.queue); // [55, 41, 20, 32, 40]

let max = priorityQueue.remove();
console.log(max, priorityQueue.queue); // 55, [41, 40, 20, 32]
max = priorityQueue.remove();
console.log(max, priorityQueue.queue); // 41, [40, 32, 20]
