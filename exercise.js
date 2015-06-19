// Question 1
var name = "Rob";

// Question 2 
var greeting = "Hello " + name;

// Question 3
var success = (true && false && !true);

// Question 4

// Question 5
function brainstationFunction(){
	console.log("Brainstation");
}

// Question 6
brainstationFunction();

// Question 7
function callName(name){
	console.log("Hello " + name);
}

callName("Dan");

// Question 8
function booleanParameters(a,b){
	return (a || b);
}

booleanParameters(true,false);

// Question 9 
// We use Git to repeatedly back up our code 
// and for version control while working with others.

// Question 10
function greaterThan2(value){
	
	if(value >= 2){
		console.log( "Pass" )
	} else {
		console.log( "Fail" )
	}
}

// Question 11
for (var i = 0; i < 12; i++) {
	console.log( "Hello World!" )
}

// Question 12
var myNumbers = [0,1,2,3,4,5];

// Question 13
var sum = 0;
for (var i = 0; i < 6; i++) {
	sum += myNumbers[i];
}
console.log(sum);

// Question 14
for (var i = 6; i < 50; i++) {
	myNumbers[i] = i + 6;
}

// Question 15
//create object using constructor function Person that person has properties name and 
//address constructor should take name and address as parameters

function Person(name, address) {
    this.name = name;
    this.address = address;
} 

var Person1 = new Person("name", "address");


// Question 16
function Computer(memory, screenSize) {
    this.memory = memory;
    this.screenSize = screenSize;

    this.turnOn = function turnOn() {
        console.log("Powering Up")
    }
} 

Computer1 = new Computer("memory", "screenSize");


// Question 17
Computer2 = new Computer("16 Gigs", "24 inches");
Computer2.turnOn();

// Question 18
function ComputerStore(name, address) {
    this.name = name;
    this.address = address;

    this.makeComputer = function makeComputer() {
    	return new Computer() 
    }
} 
} 









