const cells = document.querySelectorAll('td')
const inputs = document.querySelectorAll('input')
const buttons = document.querySelectorAll('button')
const spanRightAnswer = document.querySelector('span')
let count = 0

const answers = [
    'лелека',
    'криниця',
    'чайник',
    'дід мороз',
    'вогонь',
    'морозиво',
    'зошит',
    'вікно',
    'часник',
    'свічка'
]

buttons.forEach((btn, i) => {
    btn.addEventListener('click', (event) => {
        let firstCell = event.target.parentElement.parentElement.querySelector('td:first-child')
        let secondCell = event.target.parentElement.parentElement.querySelector('td:last-child')

        if (inputs[i].value.toLowerCase().replace(/\s/g, '') === answers[i]) {
            firstCell.style.backgroundColor = 'green'
            secondCell.textContent = '💎💎💎'
            count += 1
            spanRightAnswer.textContent = `Правильних відповідей: ${count}`
        } else {
            firstCell.style.backgroundColor = 'red'
            secondCell.textContent = '💩💩💩'
        }
    })
})