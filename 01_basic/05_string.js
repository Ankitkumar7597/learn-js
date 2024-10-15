const stringName = 'Hello'
const stringName2 = 'world'
const stringName3 = new String('JavaScript')
const str1 = 'Cats are the best!'
const str2 = '    Cats are the best!   '
// console.log(stringName +  stringName2); this is old way to print string
// console.log(`${stringName} ${stringName2}`)
// console.log(stringName3)
// console.log(stringName3.anchor('www.google.com')) //retun  <a name="www.google.com">JavaScript</a> but now this is wrong beacuage name attribut is not longger in anchor tag

// console.log(stringName3.at()) //return 's' at index 4/-4 value in string
// console.log(stringName3.charAt(4)) //return 's' at index 4 value in string note-> charAt() do not allow nagitive values
// console.log(stringName3.charCodeAt(4)) //return 's' at index 4 value in string note-> charAt() do not allow nagitive values

// console.log(stringName3.big()) //return <big>JavaScript</big> not use now browser not support this

// console.log(stringName.concat(' ', stringName2, ' ', stringName3)); // multipal string  concat 

// console.log(stringName.endsWith('H', 1)) // expected output- true (This get two agruments first string second this number) return two or false
// console.log(str1.endsWith('best', 17))

// console.log(str1.includes('are')) // expected output- true
// console.log(str1.includes('ok')) // expected output- false
// console.log(str1.indexOf('are')) // expected output- 5 return the starting index value

// console.log(str1.slice(-14, 6)) // expected output- 5 return the starting index value, this take start value also nagitive ,slice(10, 6)->show empty error
// console.log(str1.substring(5, 1)) // expected output- 5 return the starting index value, this take start value also nagitive but is convert that value is 0 ,substring(5, 1) -> this convert this value like (1 to 5)


// console.log(str2.trim())  // This is remove starting white space and end white space ,returns a new string, without modifying the original string.

// console.log(str2.replace(' ', '-')) // returns a new string, without modifying the original string.
// console.log(str2.replaceAll(' ', '-')) //returns a new string, without modifying the original string.

let splitValue = str2.split(' ')
console.log('splitValue', splitValue);

console.log(splitValue.join('_'));

