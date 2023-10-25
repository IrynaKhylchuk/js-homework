// 1. Написати програму, яка для чисел у діапазоні від A до B
// визначала кількість їхніх дільників. Наприклад, A = 10, B = 15.
// Дільники для числа 10 — 1 2 5 10;
// Дільники для числа 11 — 1 11;
// Дільники для числа 12 — 1 2 3 4 6 12;
// Дільники для числа 13 — 1 13;
// Дільники для числа 14 — 1 2 7 14;
// Дільники для числа 15 — 1 3 5 15.

const btnDetermineTheNumberOfDividers = document.getElementById('btnDetermineTheNumberOfDividers')

btnDetermineTheNumberOfDividers.addEventListener('click', function(event) {
    const firstNumber = document.getElementById('firstNumberInput').valueAsNumber
    const secondNumber = document.getElementById('secondNumberInput').valueAsNumber
    printDividersCnt(firstNumber, secondNumber)
})

function printDividersCnt(firstNumber, secondNumber) {
    const output = document.getElementById('dividersOutput')

    for (let i = firstNumber; i <= secondNumber; i++) {
        output.innerHTML += `${i} - ${getDividers(i).join(', ')} <br/>`
    }
}

function getDividers(number) {
    let dividers = []

    for (let i = 1; i <= number; i++) {
        const div = i;
        if (number % div === 0) {
            dividers.push(div)
        }
    }

    return dividers
}


// 2. Створити програму, яка виводить на екран прості числа в
// діапазоні від 2 до 1000. (Число називається простим, якщо воно
// ділиться тільки на 1 і на саме себе без залишку; причому числа 1
// і 2 за прості не вважаються).

const btnFindPrimeNumbers = document.getElementById('btnFindPrimeNumbers')

btnFindPrimeNumbers.addEventListener('click', function(event){
    
    const numbersOutput = document.getElementById('findPrimeNumbers')
    let primeNumbers = []

    for (let i = 3; i <= 1000; i++) {

        if (isPrime(i) === true) {
            primeNumbers.push(i)
        }
    }

    numbersOutput.innerHTML = primeNumbers.join(', ')
    
    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                return false;
            } 
        }
        return num > 1;
    }
})