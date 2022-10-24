/* Array & Object destructuring */

// 1) Destructuring Array

const arr = ['🥓', '🍕', '🍟']
/* 
    const bacon = arr[0]
    const pizza = arr[1]
    const fries = arr[2]
*/
const [bacon, pizza, fries] = arr;

// 2) Ignore values
const [bacon_2, , fries_2] = arr

// 3) Combine the ...rest
const [bacon_3, ...rest] = arr;
console.log(rest) // ['🍕', '🍟']

// 4) Default = value

const new_array = [undefined, '🍕', '🍟'];
const [new_bacon = '🐖', new_pizza, new_fries] = new_array

// 5) Destructuring Array 
const obj = {
    banana : '🍌',
    pepper : '🌶',
    appl: '🍎'
} 

const {banana, pepper, appl} = obj

// 6) Rename properies
const {new_banan, new_pepper, appl: apple } = obj

// 7) Nested object
const nested_obj = {
    parent: {
        child: '👼'
    },
}

const {parent: {child}} = nested_obj
console.log(child) // 👼

// 8) Funciton with destructuring

const user ={id: 0, user_name: 'Robert'}

function have_fun({id, user_name}) {
    console.log(`hi ${user_name}`)
}

have_fun(user)
