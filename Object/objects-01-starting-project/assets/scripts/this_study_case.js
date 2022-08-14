/* 
`this` refers to different this, depending on where it's used and how(if used in a funciton) a function is called.


General, `this` refers to the 'thing' which called a function(if used inside of a funciton). 
That can be the global contxt, an object or some bound data/object(e.g when the browser binds `this` to the
button that triggered a click event.)

*/

/*  [1] `this` global Context (i.e outside of any function) */
function something() {...}
console.log(this) // logs global object (window in browser) - ALWAYS (also in strict mode)

/*  [2] `this` in a Function (non-arrow funciton) - Called in the global context */
function something_1() {
	console.log(this);
}
something_1() // logs global object (window in browser) in non-strict mode, undefined in strict mode.

/*  [3] `this` in an Arrow-Funciton - Called in the global context   */
const something_2 = () => {
	console.log(this);
}
something_2() // logs global object (windwo in browser) - ALWAYS (also in strict mode)

/* 	[4] `this` in a Method (non- Arrow) - Called on an object */
const person = {
	name: 'Robert',
	greet: function () { // or use method shorthand: greet() { ... }
		console.log(this.name);
	}
}
person.greet(); //logs 'Max', "this" refers to the person object

/*	[5] `this` in a Method(Arrow Function) - Called on an object */
const person_1 = {
	name: 'Robert',
	greet: () => {
		console.log(this.name);
	}
}
//logs nothing (or some global name on window object), `this` referes to global(window) object, 
//even in strict mode
person_1.greet()

/* `this` can refer to unexpected things if you call it on some other object e.g.: */
const person_2 = { 
    name: 'Max',
    greet() {
        console.log(this.name);
    }
};
 
const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
anotherPerson.sayHi = person.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
 
anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it