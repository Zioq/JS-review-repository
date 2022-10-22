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

console.log(test_result.indexOf(10.99) !== -1) // 
console.log(test_result.includes(10.99)) // will return -1 if there is no 10.99 -> This will save us unnecessary extra comparison.


/* If you want to using index in loop -> use forEach loop */
const prices = [10.99, 5.99, 4.65, 6.99, 12.99]
const tax = 0.19;
const tax_adjusted_price = []
prices.forEach((price, index) => {
    tax_adjusted_price.push({index, tax_adjust_price: price * (1 + tax)})
})
console.log(tax_adjusted_price);


/* Alternative way to manage new seperate array onto which we push these transformed items: MAP */
/* 
    This map allows the original array stays untouched, instead it will return a brand new array with a brand new address
    in memory where every element has been changed.
*/
const tax_2 = 1.2;
const second_tax_adjust_price = prices.map((price, index) => {
    const price_obj = {index, tax_adjust_price : price * (1 + tax_2)}
    return price_obj
})

console.log(second_tax_adjust_price)


/* Sort: -> it sort the array element as 'STRING' */
const sorted_price = prices.sort((a, b) => {
    if( a > b ) {
        return 1
    } else if( a== b ) {
        return 0 
    } else {
        return -1
    }
})

console.log(sorted_price)
console.log(sorted_price.reverse())


const filtered_array = prices.filter((price, index) => {
    return price > 6
})


/* Reduce: you can reduce an array to a simpler value */
/* Reduce function requried 2 param: 1) callback funciton, 2) initial value you want to start */
const sum = price.reduce((prev, current, cur_indx) => {
    //prev: 0
    //current: first element in price
    return  prev + current
}, 0)


/* Chaining Methods in JS */
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const transformedArray = originalArray.map(obj => obj.price); // produces [10.99, 5.99, 29.99]
const sum_of_data = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

const sum2= originalArray.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97

const sum3 = originalArray.map(obj => obj.price)
    .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97