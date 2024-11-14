/*
Scope

scope as the area where certain information (variables, functions, etc.) is accessible. If something is "in scope," it means it’s available for use in that part of the code. If it’s "out of scope," it’s hidden and can’t be accessed directly.

Here’s a breakdown of scope types in JavaScript, in simpler terms:

    Global Scope: This is the broadest scope, where any variable or function you create here can be accessed from anywhere in your code.

    Module Scope: This scope is specific to a module (a separate file or unit of code). Variables in a module are available only to that module unless you export them to be shared.

    Function Scope: When you create a variable inside a function, it’s only available inside that function. You can’t access it from outside the function.

    Block Scope: This is created with {} braces (like in loops or conditionals). Variables defined with let or const inside these braces are only accessible within the braces.

To sum it up:

    Scope is about where things are accessible.

    Global is everywhere.

    Modules are self-contained.

    Functions and blocks keep things hidden within their boundaries. 
*/

// let a = 10
// const b = 20
// var c = 30

// now

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(`Inner a: ${a} and b: ${b}`);
}

// console.log(a);
// console.log(b);
console.log(c);

/* 
Scope blocks only let and const declarations, but not var declarations.

When you use { } curly braces (like in if statements or for loops), they create a "block."

    Variables declared with let or const inside these braces stay only within the block. You can’t access them outside the block.
    But if you use var, it ignores the block. var will act like it’s outside the block and can be accessed from outside, which can sometimes cause unexpected behavior. 
*/

function one() {
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // this effect of Function hoisting

// Function hoisting only works with function declarations — not with function expressions.

function addone(num) {
    return num + 1
}

console.log(addone(5))


// addTwo(5)  // recived error because expression function always call after function declarations
const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(5))  // working normal