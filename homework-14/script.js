const input = document.querySelector('.lists')
const pencil = document.querySelector('#pencil')
const ul = document.querySelector('.todos')

const all = document.querySelector('.all')
const active = document.querySelector('.active')
const performed = document.querySelector('.performed')

const save = document.querySelector('.save')
const clear = document.querySelector('.clear')
const tips = document.querySelector('.tipBtn')

// Input Display None & Block

pencil.addEventListener('click', () => {
    input.classList.toggle('display')
})

// Add li

input.addEventListener('keypress', (event) => {
    if (event.which === 13) {
        let text = input.value

        input.value = ''
        
        addNewToDo(text)
    }
})

function addNewToDo(text) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const i = document.createElement('i')

    li.textContent = text

    i.classList.add('fas', 'fa-trash-alt')
    span.insertAdjacentElement('afterbegin', i)
    li.insertAdjacentElement('afterbegin', span)
    ul.insertAdjacentElement('beforeend', li)
}

// Delete & Crossing Out

ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }

    if (event.target.tagName === 'I') {
        event.target.parentElement.parentElement.remove()
    }
})

// Active

active.addEventListener('click', () => {
    const li = document.querySelectorAll('.todos li')

    for (const i of li) {
        i.style.display = 'list-item'

        if (i.className === 'checked') {
            i.style.display = 'none'
        }
    }
})

// Performed

performed.addEventListener('click', () => {
    const li = document.querySelectorAll('.todos li')

    for (const i of li) {
        i.style.display = 'list-item'

        if (i.className !== 'checked') {
            i.style.display = 'none'
        }
    }
})

// All

all.addEventListener('click', () => {
    const li = document.querySelectorAll('.todos li')

    for (const i of li) {
        i.style.display = 'list-item'
    }
})

// Clear

clear.addEventListener('click', () => {
    ul.innerHTML = ''
})

// Modal Box

const modalBox = document.querySelector('#overlay')
const closeBtn = document.querySelector('.closeBtn')

tips.addEventListener('click', function() {
    modalBox.style.display = 'block'
    modalBox.className = 'show'
})

closeBtn.addEventListener('click', function() {
    modalBox.style.display = 'none'    
})

window.addEventListener('click', function(event) {
  if (event.target === modalBox) {
    modalBox.style.display = 'none'
  }
})