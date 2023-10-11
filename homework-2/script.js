// 1. Запитати у користувача його вік та визначити, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18-60) або пенсіонером (60-...).
// const age = +prompt("Enter your age:")

// if (age >= 0 && age <= 2) {
//     alert('You are a child')
// } else if (age >= 12 && age <= 18) {
//     alert('You are a teenager')
// } else if (age >= 18 && age <= 60) {
//     alert('You are an adult')
// } else if (age >= 60) {
//     alert('You are a pensioner')
// } else {
//     alert('Unknown')
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------
// 2. Запросити у користувача число від 0 до 9 та вивести йому спецсимвол, що розташований на цій клавіші (1–!, 2-@, 3-# і т. д).
// ---------------V1---------------
// if (number === 0) {
//     alert(')')
// } else if (number === 1) {
//     alert('!')
// } else if (number === 2) {
//     alert('@')
// } else if (number === 3) {
//     alert('#')
// } else if (number === 4) {
//     alert('$')
// } else if (number === 5) {
//     alert('%')
// } else if (number === 6) {
//     alert('^')
// } else if (number === 7) {
//     alert('&')
// } else if (number === 8) {
//     alert('*')
// } else if (number === 9) {
//     alert('(')
// } else {
//     alert('Unknown')
// }
// ---------------V2---------------
// const specialChars = [')', '!', '@', '#', '$', '%', '^', '&', '*', '(']
// const numberStr = prompt('Enter number:').trim()
// const number = +numberStr
// alert(numberStr === '' || isNaN(number) || number < 0 || number >= specialChars.length ? 'Unsupported symbol' : specialChars[number])

//-----------------------------------------------------------------------------------------------------------------------------------------------
// 3. Запросити у користувача суму покупки та вивести суму до оплати зі знижкою: від 200 до 300 – знижка буде 3%, від 300 до 500 – 5%, від 500 і від – 7%.
// let amount = +prompt('Enter purchase amount:')
// let discount = 0

// if (amount >= 200 && amount <= 300) {
//     discount = .03
// } else if (amount > 300 && amount <= 500) {
//     discount = .05
// } else if (amount > 500) {
//     discount = .07
// } else if (amount < 0) {
//     amount = 0
// }

// alert(`Your purchase amount with discount (${Math.round(discount * 100)}%) = ${amount - amount * discount}`)

//-----------------------------------------------------------------------------------------------------------------------------------------------
// 4. Запросити у користувача рік і перевірити, чи високосний він чи ні. Високосний рік або кратен 400, або кратен 4 і при цьому не кратний 100.
// const isLeapYear = (year) => year > 0 && (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)
// const isLeapYearV2 = (year) => new Date(year, 1, 29).getDate() === 29
// let year = +prompt('Enter year:')
// alert(isLeapYear(year) ? `${year} is a leap year` : `${year} is not a leap year`)

// 5. Запитати дату (день, місяць, рік) та вивести наступну за нею дату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.
// ---------------V1---------------
// TODO: implement

// ---------------V2---------------
// function getNextDate(input) {
//     const currentDate = new Date(input.value)
//     const nextDate = new Date(currentDate.setDate(currentDate.getDate() + 1))
//     alert(`Next date is: ${nextDate}`)
// }