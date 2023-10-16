// Функція підрахунку податку на прибуток:
// Напишіть функцію, яка обчислює податок на прибуток на основі введених доходів і податкової ставки.

const btnCalculateIncomeTax = document.getElementById('btnCalculateIncomeTax')
btnCalculateIncomeTax.addEventListener('click', function() {
    const income = document.getElementById('incomeInput').valueAsNumber
    const taxRate = document.getElementById('taxRateInput').valueAsNumber
    const result = document.getElementById('incomeTaxResult')

    result.innerHTML = (income * taxRate) / 100
})


// Функція-перевірка на парність:
// Напишіть функцію, яка перевіряє, чи є задане число парним. 
// Функція повинна повертати true, якщо число парне, і false, якщо воно не парне.

const numberInput = document.getElementById('numberInput')
numberInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {

        const number = numberInput.valueAsNumber
        const result = document.getElementById('evenOrOddNumber')

        result.innerHTML = isEven(number)
    }
})

function isEven(number) {
    return number % 2 === 0
}


// Порівняння чисел:
// Напишіть функцію, яка приймає два числа і використовує конструкції if-else для визначення, яке з них більше.

const buttonCheck = document.getElementById('buttonCheck')
buttonCheck.addEventListener('click', function() {
    const firstNumber = document.getElementById('firstNumberInput').valueAsNumber
    const secondNumber = document.getElementById('secondNumberInput').valueAsNumber
    const result = document.getElementById('moreOrLessNumber')

    result.innerHTML = compareNumbers(firstNumber, secondNumber)
})

function compareNumbers(firstNumber, secondNumber) {
    let result;
    if (firstNumber > secondNumber) {
        result = 'The first number is greater than the second: ' + firstNumber + ' > ' + secondNumber
    } else if (firstNumber < secondNumber) {
        result = 'The second number is greater than the first: ' + firstNumber + ' < ' + secondNumber
    } else {
        result = 'The first number is equal to the second: ' + firstNumber + ' = ' + secondNumber
    }
    return result;
}


// Перевірка прав доступу:
// Напишіть функцію, яка приймає рівень доступу користувача (наприклад, "admin", "user", "guest") 
// і використовує конструкції if-else для визначення, які дії він може виконувати.

const levelInput = document.getElementById('levelInput')
levelInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        
        const level = levelInput.value.toLowerCase()

        showRights(level)
    }
}) 

function showRights(level) {
    const adminRights = document.getElementById('adminRights')
    const userRights = document.getElementById('userRights')
    const guestRights = document.getElementById('guestRights')

    if (level === 'admin') {
        adminRights.style.display = 'block'
        userRights.style.display = 'none'
        guestRights.style.display = 'none'
    } else if (level === 'user') {
        userRights.style.display = 'block'
        adminRights.style.display = 'none'
        guestRights.style.display = 'none'
    } else if (level === 'guest') {
        guestRights.style.display = 'block'
        adminRights.style.display = 'none'
        userRights.style.display = 'none'
    } else {
        alert('Unknown')
    }
}