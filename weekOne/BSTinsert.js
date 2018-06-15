
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



//without using Class

// function BST(){
// 	this.root = null;
// }
// function Node(val){
// 	this.value = val;
// 	this.left = null;
// 	this.right = null;
// }


// BST.prototype.insert2 = function(val){
// 	if(!this.root){
// 		this.root = new Node(val);
// 		return this;
// 	}
// 	this.root.insert(val);
// 	return this;
// }

// //recursion solution 
// Node.prototype.insert = function(val){
// 	if(val < this.value){
// 		if(this.left){
// 			this.left.insert(val);
// 		}
// 		else {
// 			this.left = new Node(val);
// 		}
// 	}
// 	else {
// 		if(this.right){
// 			this.right.insert(val);
// 		}
// 		else {
// 			this.right = new Node(val);
// 		}
// 	}
// }

// var second = new BST();
// second.insert2(40);
// second.insert2(50);
// second.insert2(20);
// second.insert2(25);
// second.insert2(24);
// console.log(second.root);
