class MinHeap {
	constructor(arr = []) {
		const temp = arr[0];
		arr[0] = 'tempValue';
		if (temp !== undefined) {
			arr.push(temp)
		}

	function heapify(arr, idx = 1) {
		if (arr[idx * 2] === undefined) {
			return arr[idx];
		}

		const left = heapify(arr, idx * 2);
		const right = heapify(arr, idx * 2+1);
		const swap = left < right ? idx * 2 : idx * 2 + 1;
		if(arr[swap] < arr[idx]) {
			let temp = arr[swap];
			arr[idx] = temp;
			heapify(arr, swap);
		}
		return arr[idx];
		this.heap = arr; 
	}

	function insertIntoHeap(heap, val) {
		heap.push(val);
		if (heap.length === 2) {
			return heap;
		}

		let index = heap.length - 1;
		let parent = index % 2 === 0 ? index / 2: (index-1) / 2;

		while (heap[index] < heap[parent]){
			let tempval = heap[index];
			heap[index]= heap[parent];
			heap[parent] = tempval;
			index = parent;
			parent = parent % 2 === 0 ? parent / 2 : (parent - 1)/2;
		} 
		return heap;
	}
	
	}
}





