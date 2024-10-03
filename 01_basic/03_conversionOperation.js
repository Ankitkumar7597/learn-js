let score = 33
let scoreStr = '33'
let scoreStr1 = '33abc'
let scoreNull = null
let scoreUndefined = undefined

// console.log(typeof score)
// console.log(typeof (scoreStr1))
// console.log(typeof (scoreNull))
console.log(typeof (scoreUndefined))

let conversionInNumber = Number(scoreStr)
let conversionInNumber2 = Number(scoreStr1) // convert in number but return value NaN (not a number)
let conversionInNumber3 = Number(scoreNull)  // convert in number return value is 0
let conversionInNumber4 = Number(scoreUndefined)  // convert in number return value is 0

// console.log(typeof (conversionInNumber))
// console.log(conversionInNumber)

// console.log(typeof (conversionInNumber2))
// console.log(conversionInNumber2)


// console.log(typeof (conversionInNumber3))
// console.log(conversionInNumber3)


console.log(typeof (conversionInNumber4))
console.log(conversionInNumber4)