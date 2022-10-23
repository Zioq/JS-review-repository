const people =  [
	{id: '1', name: 'Robert', age: 35},
	{id: '2', name: 'Shwan', age: 20},
	{id: '3', name: 'Will', age: 55}
]

let result;

//count 
result = people.reduce((acc, person) => acc +1 , 0)

// Sum age
result = people.reduce((acc, person) => acc + person.age , 0)

// array of names (map)
result = people.reduce((acc, person) => [...acc, person.name], [])

// convert to id => person lookup (dict)
/* Convert as id is key, and object going to be value */
result = people.reduce((acc, person) => {
	return { ...acc, [person.id]: {person}}
}, {})
console.log(result['3']) // {id: '3', name: 'Will', age: 30}

// max age
result = people.reduce((acc, person) => {
	if(acc === null || person.age > acc) return person.age;
	return acc
}, null)

// min age
result = people.reduce((acc, person) => {
	if(acc === null || person.age < acc) return person.age;
	return acc
}, null)

// find by name
result = people.reduce((acc, person) => {
	if(acc !== null) return acc; // Already found someone, return it to prevent loop unncessary.
	if(person.name == 'Robert') return person;
	return null
}, null)

// all over 18
result = people.reduce((acc, person) => {
	if(!acc) return false
	return person.age > 18
}, true)


// any over 18 (we can user some)
result = people.reduce((acc, person) => {
	if (acc) return true;
	return person.age > 18;
}, false)


// count occurrences
const orders = [
	{'id': '1', 'status': 'pending'},
	{'id': '2', 'status': 'pending'},
	{'id': '3', 'status': 'canceled'},
	{'id': '4', 'status': 'shipped'}
]

result = orders.reduce((acc, order) => {
	return {...acc, [order.status]: (acc[order.status] || 0 ) +1}
}, {})


// flatten
const folders =[
	'index.js',
	['flatten.js', 'map.js'],
	['any.js', ['all.js', ['count.js']]]
]

//Need a function for recursive function call
function flatten(acc, item) {
	/* Version 1
		if(Array.isArray(item)) {
			return [...acc, ...item.reduce(flatten, [])]
		}
		return [...acc, item];
	*/

	/* Version 2 */
	if(Array.isArray(item)) {
		return item.reduce(flatten, acc);
	}
	return [... acc, item];
   
}

result = folders.reduce(flatten, [])


// Create reduce ourselves

function reduce(array, callback, initial) {
	let acc = initial

	for(let i = 0; i <array.length; i ++) {
		acc = callback(acc, array[i], i, array)
	}

	return acc;
}

result = reduce([1,2,3], (acc, num) => acc + num, 0)