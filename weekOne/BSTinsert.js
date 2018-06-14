class Node {
	//create a node 
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
	//recursion solution to insert data
	insert(data){
		if(data< this.data && this.left){
			this.left.insert(data);
		} else if (data < this.data) {
			this.left = new Node(data);
		}
		else if(data> this.data && this.right){
			this.right.insert(data);
		} else if(data > this.data){
			this.right = new Node(data);
		}
	}
}

let first =  new Node(50);
first.insert(200);
first.insert(40);
first.insert(30);
first.insert(41);
first.insert(199);
first.insert(201);
first.insert(29);
first.insert(31);

console.log(first);


