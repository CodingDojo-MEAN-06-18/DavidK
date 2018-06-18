function BST() {
	this.root = null;
}
function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null; 
}

BST.prototype.insert = function(data){
	if(!this.root){
		this.root = new Node(data);
		return this;
	}
	var runner = this.root;
	while(runner){
		if(data < runner.data){
			if(runner.left){
				runner = runner.left;
			}
			else{
				runner.left = new Node(data);
				return this;
			}
		}
		else {
			if(runner.right){
				runner= runner.right;
			}
			else {
				runner.right = new Node(data);
				return this;
			}
		}
	}
};

BST.prototype.preOrder = function(root) {
	console.log(root.data);

	if(root.left){
		this.preOrder(root.left);
	}
	if(root.right){
		this.preOrder(root.right);
	}
};

BST.prototype.inOrder = function(root){

	if(root.left){
		this.inOrder(root.left);
	}
	console.log(root.data);

	if (root.right){
		this.inOrder(root.right);
	}

};

BST.prototype.postOrder = function(root){
	if(root.left){
		this.postOrder(root.left);
	}
	if(root.right){
		this.postOrder(root.right);
	}
	console.log(root.data);
};


var first = new BST();
first.insert(40);
first.insert(50);
first.insert(10);
first.insert(5);


// first.preOrder(first.root);

// first.inOrder(first.root);

// first.postOrder(first.root);
