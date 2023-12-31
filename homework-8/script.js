// Завдання 1:
// Задано масив з числовими значеннями 2, -5, -9, 2, -4, 5, 34, -11, 2, 3, -4, 5, -6, 9;
// В масиві визначити суму від’ємних елементів
// Знайти добуток елементів, розташованих між найбільшим та найменшим елементами.

// [-11, -9, -6, -5, -4, -4, 2, 2, 2, 3, 5, 5, 9, 34] 
const arrayNumbers = [2, -5, -9, 2, -4, 5, 34, -11, 2, 3, -4, 5, -6, 9] 
console.log(arrayNumbers)
arrayNumbers.sort((x, y) => x - y)
console.log(arrayNumbers)

let sum = arrayNumbers.reduce((total, amount) => {
    if (amount < 0) {
        return total + amount
    }
    return total
})

console.log(`Task 1: Sum = ${sum}`)

//1
let product = 1
for (let i = 1; i < arrayNumbers.length - 1; i++) {
    const number = arrayNumbers[i]
    product *= number
}
console.log(`Task 1: Product v1 = ${product}`)

//2
product = 1
arrayNumbers.forEach((number, index) => {
    if (index > 0 && index < arrayNumbers.length - 1)
    {
        product *= number
    }
})
console.log(`Task 1: Product v2 = ${product}`)

// Завдання 2:
// Задано масив з числовими значеннями 45, -65, 48, 52, -45, -78, -96, 25, 14, 25, 45;
// В масиві визначити добуток елементів з парними номерами.
// Знайти суму елементів, розташованих між найбільшим та найменшим елементами.

const arrayNumbers2 = [45, -65, 48, 52, -45, -78, -96, 25, 14, 25, 45]

console.log(arrayNumbers2)
arrayNumbers2.sort((x, y) => x - y)
console.log(arrayNumbers2)

sum = 0

arrayNumbers2.forEach((number, index) => {
    if (index > 0 && index < arrayNumbers2.length - 1)
    {
        sum += number
    }
})

console.log(`Task 2: Sum between min and max = ${sum}`)

product = 1

arrayNumbers2.forEach((number) => {
    if (number % 2 === 0)
    {
        product *= number
    }
})

console.log(`Task 2: Product of even numbers = ${product}`)

// Завдання 3:
// Задано масив з числовими значеннями 45, 65, 48, 52, 45, -78, -96, 25, 14, 25, 45;
// В одновимірному масиві визначити номер максимального елемента масива.
// Визначити суму елементів, розташованих до першого від’ємного елемента.

const arrayNumbers3 = [45, 65, 48, 52, 45, -78, -96, 25, 14, 25, 45]
console.log(arrayNumbers3)

const sortedArray3 = arrayNumbers3.toSorted((x, y) => x - y)
console.log(sortedArray3)

//1
const last = sortedArray3[sortedArray3.length - 1]
console.log(`Task 3: The index of the max element is v1: ${sortedArray3.indexOf(last)}`)

//2
let max = arrayNumbers3.reduce((a, b) => Math.max(a, b), -Infinity)
console.log(`Task 3: The index of the max element is v2: ${arrayNumbers3.indexOf(max)}`)

//3
max = findMax(arrayNumbers3)
console.log(`Task 3: The index of the max element is v3: ${arrayNumbers3.indexOf(max)}`);

function findMax(numbers) {
    let max = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        const nextNumber = numbers[i];
        
        if (max < nextNumber) {
            max = nextNumber
        }
    } 

    return max
}

const indexOfFirstNegativeNumber = arrayNumbers3.findIndex((number) => number < 0)
let index = 0
sum = 0

while (index < indexOfFirstNegativeNumber) {
    sum += arrayNumbers3[index++]
}

console.log(`Task 3: The sum of the elements located to the first negative element: ${sum}`);

// Завдання 4:
// Задано масив А, що містить 100 цілих чисел. Знайти суму елементів цього масиву.

const arrayNumbers4 = []

function createRandomArray(array, length) {

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * 201) - 100
        array.push(randomNumber)
    }

    return array
}

const randomNumbersArray = createRandomArray(arrayNumbers4, 100)
console.log(randomNumbersArray)

sum = randomNumbersArray.reduce((total, amount) => {
    return total + amount
})

console.log(`Task 4: The sum of array elements: ${sum}`)

//Завдання 5:
// Задано масив В, що містить 50 цілих чисел. 
// Знайти добуток елементів масиву, що є непарними числами.

const arrayNumbers5 = []

function createRandomNumbers(array, length) {
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * 101) - 50
        array.push(randomNumber)
    }

    return array
}

console.log(createRandomNumbers(arrayNumbers5, 50))

product = 1

arrayNumbers5.forEach((number) => {
    if (number % 2 !== 0){
        product *= number
    }
})

console.log(`Task 5: The product of array elements that are odd numbers: ${product}`)

// Завдання 6:
// Задано масив С, що містить 50 цілих чисел. Знайти позицію (позиції) елементу, що має мінімальне значення.
// Якщо таких елементів декілька, сформувати додатковий масив індексів.

const arrayNumbers6 = []

console.log(createRandomNumbers(arrayNumbers6, 50))

function findMin(numbers) {
    let min = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        const nextNumber = numbers[i]

        if (min > nextNumber) {
            min = nextNumber
        }
    }

    return min
}

const min = findMin(arrayNumbers6)

function findIndex(array) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        if (min === array[i]) {
            result.push(i)
        } 
    }

    return result
}

console.log(`Task 6: The index of the min element/elements: ${findIndex(arrayNumbers6)}`)