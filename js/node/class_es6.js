'use strict'

//Example 1: Creating a new class (declaration-form)
//

class Polygon{
	constructor(height,width){
		this.name = 'Polygon';
		this.height = height;
		this.width = width;
	}

	sayName() {
		console.log('Hi, I am a ', this.name+'.');
	}

	sayHistory(){
		console.log('"Polygon" is derived from...');
	}
}

let p = new Polygon(300,400);
p.sayName();
console.log('The width of this polygon is '+p.width);


//Example 2: Creating a new class (expression-form)
//Our Polygon class above is an example of a Class declaration.
//ES6 classes also support Class expressions - just another way
//of defining a new class. For example:
const MyPoly = class Poly {
	getPolyName(){
		console.log('Hi. I was '+Poly.name);
	}
}

let inst = new MyPoly();
inst.getPolyName();


//Example 3: Extending an existing class
//
//Classes support extending other classes, but can also extend
//other objects. Whatever you extend must be a constructor.
//
//Let's extend the Polygon class to create a nre derived class
//called Square.
class Square extends Polygon {
	constructor(length){
		//The reserved 'super' keyword is for making super-constructor
		//calls and allows access to parent methods
		//
		//Here, it will call the parent class' constructor with lengths
		//provided for the Polygon's width and height
		super(length,length);
		this.name = 'Square';
	}
	get area(){
		return this.height*this.width;
	}
	set area(value){
		this._area = value;
	}
}

let s = new Square(5);
s.sayName();
console.log(s.area);
s.area = 30;
console.log(s.__proto__)
//console.log(s.prototype.getPrototypeOf(Polygon));
console.log(s.area);

//Example 4: Subclassing methods of a parent class

class Rectangle extends Polygon{
	constructor(height,width){
		super(height,width);
		this.name = 'Rectangle';
	}
	sayName() {
		console.log('Sup!My name is',this.name);
		super.sayHistory();
	}
}

let r = new Rectangle(50,60);
r.sayName();

//Example 5: Defining static methods
//Classes support static members which can be accessed without an
//instance being present.

class Triple {
	//Using the 'static' keyword creates a method which is accociated
	//with a class, but not with an instance of the class.
	static triple(n) {
		//console.log(n);
		//undefined || 1 =1
		n = n || 1;
		return n*3;
	}
}

class BiggerTriple extends Triple{
	static triple(n){
		return super.triple(n)*super.triple(n);
	}
}

console.log(Triple.triple());
console.log(Triple.triple(6));
console.log(BiggerTriple.triple(3));

//Example 6: Subclassing built-in classes and DOM
class MyDate extends Date {
	constructor() {
		super();
	}
	
	getFormattedDate() {
		var months = ['Jan','Feb','Mar','Jun','Jul'];
		return this.getDate()+'-'+months[this.getMonth()-5]+'-'+this.getFullYear();
	}
}

var aDate = new MyDate();
console.log(aDate.getTime());
console.log(aDate.getFormattedDate());

