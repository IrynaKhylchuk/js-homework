// 1 Фільтрація позитивних(+) чисел. Створіть функцію, 
// яка приймає масив чисел і повертає новий масив, що містить 
// лише позитивні(+) числа.

const btnFindPositiveNumbers = document.getElementById('btnFindPositiveNumbers')

btnFindPositiveNumbers.addEventListener('click', function(event){
    let arrayNumbers = document.getElementById('arrayPositiveNumbers').value
    let arrayPositiveNumbers = arrayNumbers.split(',').map(Number)
    const result = document.getElementById('positiveNumbersOutput')

    return result.innerHTML = findPositiveNumbers(arrayPositiveNumbers)

})

function findPositiveNumbers(numbers) {
    let positiveNumbers = []

    for (const number of numbers) {
        if (number > 0) {
            positiveNumbers.push(number)
        }
    }

    return positiveNumbers.join(', ')
}


// 2 Знайти мінімальний та максимальний елементи масиву. 
// Створіть функцію, яка приймає масив чисел і повертає 
// об'єкт з мінімальним і максимальним значеннями.

const btnFindMinAndMaxNumbers = document.getElementById('btnFindMinAndMaxNumbers')

btnFindMinAndMaxNumbers.addEventListener('click', function(event){
    let arrayMinAndMax = document.getElementById('arrayMinAndMaxNumbers').value
    let arrayMinAndMaxNumbers = arrayMinAndMax.split(',').map(Number)
    const result = document.getElementById('minAndMaxNumbersOutput')

    let min = findMin(arrayMinAndMaxNumbers)
    let max = findMax(arrayMinAndMaxNumbers)

    return result.innerHTML = `Min = ${min} <br/> Max = ${max}`

})

function findMin(numbers) {
    let min = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        const nextNumber = numbers[i];

        if (min > nextNumber) {
            min = nextNumber
        }
    }

    return min

}

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


// 3 Видалення дублікатів. Напишіть функцію, яка приймає 
// масив і повертає новий масив без дублікатів.

const btnDeleteDuplicate = document.getElementById('btnDeleteDuplicate')

btnDeleteDuplicate.addEventListener('click', function(event){
    let arrayNumbers = document.getElementById('arrayDuplicate').value
    let arrayDuplicate = arrayNumbers.split(',').map(Number)
    const result = document.getElementById('duplicateOutput')
    console.log(deleteDuplicate(arrayDuplicate));
    return result.innerHTML = deleteDuplicate(arrayDuplicate).join(', ')
})

function deleteDuplicate(numbers) {
    let result = []
    // [2,4,1,7,2,5,2,4]
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        let isDuplicate = false
        for (let j = i + 1; j < numbers.length; j++) {
            if (number === numbers[j]) {
                isDuplicate = true
                break
            }
        }
        if (!isDuplicate) {
            result.push(number)
        }
    }
    return result
}


// 4 Зливання масивів. Напишіть функцію, яка приймає два 
// масиви і повертає новий масив, що містить всі елементи 
// з обох масивів.

const btnMergeArray = document.getElementById('btnMergeArray')

btnMergeArray.addEventListener('click', function(event){
    let firstInput = document.getElementById('firstInput').value
    let secondInput = document.getElementById('secondInput').value
    let firstArray = firstInput.split(',').map(Number)
    let secondArray = secondInput.split(',').map(Number)
    const result = document.getElementById('mergeArraysOutput')
    const merge = firstArray.concat(secondArray);
    
    console.log(concatArrays(firstArray, secondArray))

    return result.innerHTML = merge.join(', ')

})

function concatArrays(first, second) {
    let result = []

    for (const number of first) {
        result.push(number)
    }

    for (const number of second) {
        result.push(number)
    }

    return result
}