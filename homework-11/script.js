const input = document.querySelector('.userText')
const btn = document.querySelector('button')

window.addEventListener('keypress', e => e.key === 'Enter' ? addLetters() : null)

const addLetters = () => {
    const listItems = document.querySelectorAll('li')
    if (listItems.length > 0) {
        listItems.forEach(item => item.remove())
    }
    let letters = {}

    for (let i = 0; i < input.value.length; i++) {
        const letter = input.value[i]
        if (letters[letter]) {
            letters[letter]++
        } else {
            letters[letter] = 1
        }
    }

    let keySort = Object.keys(letters).sort((a, b) => letters[b] - letters[a])
    let ul = document.querySelector('ul')

    for (let i = 0; i < keySort.length; i++) {
        let sumbol = keySort[i]

        let interest = letters[sumbol] / input.value.length * 100

        ul.insertAdjacentHTML('beforeend',
        `<li>${sumbol}: ${letters[sumbol]} - ${interest.toFixed(3)}%</li>`
        )
    }

    const numberOfWords = document.querySelector('#numberOfWords')
    const wordsLength = input.value.split(' ').length
    numberOfWords.innerHTML = `Number of Words = ${wordsLength}`

    const numberOfCharacters = document.querySelector('#numberOfCharacters')
    const charactersLength = input.value.split('').length
    numberOfCharacters.innerHTML = `Number of Characters = ${charactersLength}`
}

btn.addEventListener('click', addLetters)