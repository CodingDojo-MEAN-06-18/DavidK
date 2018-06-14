

// var hello gets hoisted
// console.log(hello);  prints undefined 
// hello = 'world';

console.log(hello);                                   
var hello = 'world';                                 


// var needle gets hoisted
// function test() gets hoisted
// prints magnet

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// var brendan hoisted
//function print() hoisted
// prints super cool

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// var food hoisted
// eat() hoisted 
// print chicken
// print half-chicken

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// var mean gets hoisted
// not defined
// not defined


mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// var genre hoisted
// rewind() hoisted
// prints undefined
// rock
// r&b
// disco

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);


// function learn gets hoisted
// prints san jose
// prints seattle
// prints burbank 
// prints sanjose 

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// makeDojo gets hoisted
// TypeError: Assignment to constant variable.

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
