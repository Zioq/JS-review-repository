const li_node = document.querySelectorAll('li')
const li_item_list = Array.from(li_node);
console.log(li_item_list)


const hobbies = ['Sports', 'Cooking']
hobbies.splice(1, 0, 'Coding') // Sports, Coding, Cooking

const removed_elements = hobbies.slice(0, 1) // Coding, Cooking 'Delete(1) element from Index(0)'
hobbies.slice(0) // Delete all element



const test_result = [1, 5.3, 1.4, 10.99, -5, 10]
const stored_result = test_result;
const new_stored_result = test_result.slice() // slice function return new aray
const sliced_test_result = test_result.slice(0,2) // 1, 5.3 -> from first param, to before second param
cons
const sliced_test_result_2 = test_result.slice(2) //1.4, 10.99, -5, 10

test_result.push(99)

console.log(test_result, stored_result) // Get same value 
//arrays are reference values and they affirm what we store here is just a pointer at this place in memory, just the address of the array.

console.log(test_result, new_stored_result) // Different value


/* concat: pull out all elements of the array you are passing and add them as new elements to the existing array and it will then also return a brand */
const new_concat_array = test_result.concat(['3', '4', '5'])


const personData = [{name:'Robert'}, {name: 'Pill'}]
console.log(personData.indexOf({name: 'Pill'})) // return -1 
// Because Objects are reference values and the object inside of indexOf is a brand new object. 
// It's seems like same, but it's not never similar.

const pill = personData.find( (person) => {
    return person.name === 'Pill'
}) // find does not create a copy. It's working with reference value
console.log(pill) // {name: 'Pill'} 

const robertIndex = personData.findIndex( (person) => {
    return person.name === 'Robert'
})
console.log(robertIndex) // 0