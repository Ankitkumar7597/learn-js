let score = 33
let scoreStr = '33'
let scoreStr1 = '33abc'
let scoreNull = null
let scoreUndefined = undefined

// console.log(typeof score)
// console.log(typeof (scoreStr1))
// console.log(typeof (scoreNull))
// console.log(typeof (scoreUndefined))

let conversionInNumber = Number(scoreStr)
let conversionInNumber2 = Number(scoreStr1) // convert in number but return value NaN (not a number)
let conversionInNumber3 = Number(scoreNull)  // convert in number return value is 0
let conversionInNumber4 = Number(scoreUndefined)  // convert in number return value is NaN

// console.log(typeof (conversionInNumber))
// console.log(conversionInNumber)

// console.log(typeof (conversionInNumber2))
// console.log(conversionInNumber2)


// console.log(typeof (conversionInNumber3))
// console.log(conversionInNumber3)


// console.log(typeof (conversionInNumber4))
// console.log(conversionInNumber4)


// let conversion = Boolean(score)
// let conversion1 = Boolean(scoreStr)
// let conversion1InNumber2 = Boolean(scoreStr1)
// let conversion1InNumber3 = Boolean(scoreNull)
// let conversion1InNumber4 = Boolean(scoreUndefined)

// console.table([conversion,conversion1, conversion1InNumber2, conversion1InNumber3, conversion1InNumber4])


/* Oprations */

let a = 1
let b = '1'
let c = 'a'
let d = '-1'

console.log(a+b+c+d)