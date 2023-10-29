// Завдання 1:
// Задано масив з числовими значеннями 2, -5, -9, 2, -4, 5, 34, -11, 2, 3, -4, 5, -6, 9;
// В масиві визначити суму від’ємних елементів
// Знайти добуток елементів, розташованих між найбільшим та найменшим елементами.

// [-11, -9, -6, -5, -4, -4, 2, 2, 2, 3, 5, 5, 9, 34] 
const arrayNumbers = [2, -5, -9, 2, -4, 5, 34, -11, 2, 3, -4, 5, -6, 9] 
console.log(arrayNumbers)
arrayNumbers.sort((x, y) => x - y)
console.log(arrayNumbers)

const sum = arrayNumbers.reduce((total, amount) =>{
    if (amount < 0) {
        return total + amount
    }
    return total
})

console.log(sum)

//1
let product = 1
for (let i = 1; i < arrayNumbers.length - 1; i++) {
    const number = arrayNumbers[i]
    product *= number
}
console.log(product)

//2
product = 1
arrayNumbers.forEach((number, index) => {
    if (index > 0 && index < arrayNumbers.length - 1)
    {
        product *= number
    }
})
console.log(product)

