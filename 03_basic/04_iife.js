//Immediately Invoked Fuction Expressions

console.log("This is working");

(function aj() {
    console.log("DB CONNECTED")
})();
(() => {
    console.log("DB CONNECTED")
})()