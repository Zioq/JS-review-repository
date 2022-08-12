/* Object Spread Operator(...) */

const person = {name: 'Robert', hobbies:['A', 'B', 'C']};

/* Objects are reference values */
const anotherPerson = person;
person.age = 30;
console.log(anotherPerson) // {name: 'Robert', hobbies:['A', 'B', 'C'], age: 30};
//It's beacuase it poitns at the very same property in memory

const copied_perosn = {...person} // This copied all key-value paries of that object you pass after the spread operator
// It creates a new object but copies over the values you have in the keys of the old object. 

person.age = 31;
console.log(copied_perosn) // {name: 'Robert', hobbies:['A', 'B', 'C'], age:30} -> still has that age of 30 and didn't get that new value becuase now we created copy.
// Also the hobbies in the copied_person it' not really copeid, it's still the same array object in memory.

// Instead of just copied, If you want to really copy and past it into new object
const new_person = {... person, name:'Robert', hobbies:[...person.hobbies]}

// OR you can user Obejct.assign() if you wnat to a new object and paste target obejct into it.
const new_person_2 = Object.assign({}, person);