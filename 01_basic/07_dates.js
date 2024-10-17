const newDate = new Date()

// console.log('newDate',newDate.getDate());
// console.log('newDate',newDate.getDay());
// console.log('newDate',newDate.getMonth());
// console.log('newDate',newDate.getFullYear());


// console.log(newDate)
// console.log(newDate.toString())
// console.log(newDate.toDateString())
// console.log(newDate.toTimeString())
// console.log(newDate.toLocaleString())
// console.log(newDate.toLocaleDateString())
// console.log(newDate.toLocaleTimeString())
// console.log(newDate.toISOString())
// console.log(newDate.toUTCString())
// console.log(newDate.toJSON())

const newDate1 = new Date(2020, 0, 15, 1, 10, 15, 500) // get coustom date
// const newDate2 = new Date("01-21-2020") //mm-dd-yyy
// const newDate2 = new Date("2020-01-21") //yyyy-mm-dd
// console.log('newDate2', newDate2);

let myTimeStemp = Date.now() // this provide the milisecond of date 

// console.log('myTimeStemp', myTimeStemp)
// console.log('newDate1', newDate1.getTime())

// miliseconds convert to seconds

let timeStempInSeconds = Math.floor(Date.now() / 1000)
// console.log('timeStempInSeconds',timeStempInSeconds);

let customDateF = newDate.toLocaleString('IN',{
    timeZone:'asia/kolkata',
})
console.log('customDateF', customDateF);
