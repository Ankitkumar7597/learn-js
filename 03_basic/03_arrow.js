const user = {
    username: "Ankit",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Aman"
// user.welcomeMessage()

/*
'This' Keyword
    The 'this' keyword points to the current context in which a function is running. In simple terms, when used inside an object’s method (a function that belongs to an object), this usually refers to that object. This lets us use the same method across different objects, with this adjusting to refer to each specific object it’s called on.
 */

// console.log(this) //{} empty object but when in browser show a window object


/* function chai() {
    let username = "ankit"
    console.log(this.username)
    console.log(this) // return a  object
}

chai() */

/* let chai = function () {
    let username = "ankit"
    console.log(this.username)
    console.log(this) // return a  object
}

chai() */

// arrow function syntax 

let chai = () => {
    let username = "ankit"
    // console.log(this.username)
    console.log(this) // return a empty object
}

// chai()

// 1 syntax  'When use {} in arrow function use return for return values'
/* const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2,4)) */

// 2 syntax  'When use () in arrow function auto return the values'

// const addTwo = (num1, num2) => num1 + num2   //also use like this

const addTwo = (num1, num2) => (num1 + num2)   //also use like this

console.log(addTwo(2, 4))

/* 
In regular functions, the this keyword depends on how the function is called:

    If you call the function as part of an object (e.g., obj.myFunction()), this refers to that object.

    If you call it without an object (e.g., myFunction()), this usually refers to the global context, like window in a browser.

In arrow functions, this behaves differently. It doesn’t change based on how it’s called; instead, it sticks to the this from the place where the arrow function was written. So, if an arrow function is inside another function or method, this in the arrow function will be the same as in that outer function.
*/