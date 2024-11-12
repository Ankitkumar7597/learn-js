const Heroes = ['satiman', 'hatim', 'hanuman']
const Heroes2 = ['spiderman', 'ironman', 'thenos']

// Heroes.push(Heroes2) // this push the array as itme
// console.log(Heroes)

// const allHeroes = Heroes.concat(Heroes2) // this is concat the array and Return a new array 
// console.log(allHeroes);


// now learn about Spread operator

/* Spread syntax (...) =>
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created. */

let test = 'ankit'
let test2 = 9876543
let test3 = { name: 'Ankit', age: '23' }
let test4 = [5, 4, 4, 3, 2, 2]
// console.log(...Heroes)
// console.log(...test)
// console.log(...test2)
// console.log(...test3)
// console.log([...Heroes, ...Heroes2, ...test4])

// const a = [[1], [2], [3]];
// const b = [...a];
// b.shift().shift();
// console.log(b)
// console.log(a);

/*
Array.prototype.flat() =>
 The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. */

const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat())
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat());
// expected output: Array [0, 1, 2, [3, [4, 5]]]

// console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, [4, 5]]

// console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]


// Advance array 

let newArray = 'AnkitJangir'

// isArray  (return true or false)
// console.log(Array.isArray(newArray))

// Array.from create new array
// console.log(Array.from(newArray))

// object convort to array
// console.log(Array.from({name:'Ankit'}))  //retune empty array when not create array

// console.log(Object.keys({ name: 'Ankit' })); // ["name"]

// console.log(Array.from(Object.entries({ name: 'Ankit' }))); // [["name", "Ankit"]]

// console.log(Array.from(Object.values({ name: 'Ankit' }))); // ["Ankit"]








