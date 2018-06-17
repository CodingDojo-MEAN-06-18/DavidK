
function fib(){
	let prev = 0;
	let curr = 1;

	function nacci(){
		const temp = prev;
		console.log(curr);
		prev = curr;
		curr = curr + temp;
	}
	return nacci;
}

var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();