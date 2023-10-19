// Підрахунок суми чисел який передав користувач як аргумент в вашу функцію 
// (з використанням рекурсії і 'arguments[i]' і 'arguments.length'

const numbersInput = document.getElementById('numbersInput')

numbersInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {

        const numbers = numbersInput.value
        const result = document.getElementById('result')

        result.innerHTML = sumOfNumbersRecursive(numbers.split(',').map(Number))
    }
})

function sumOfNumbers(){
    let sum = 0;

    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum
}


function sumOfNumbersRecursive(numbers){
    if (numbers.length === 0){
        return 0;
    }

    return numbers[0] + sumOfNumbersRecursive(numbers.slice(1));

    // 1 + [2,3,4]
    // 1 + 2 + [3,4]
    // 1 + 2 + 3 + [4]
    // 1 + 2 + 3 + 4 + 0
}

console.log(sumOfNumbers(1,2,3,4))
console.log(sumOfNumbersRecursive([1,2,3,4]))