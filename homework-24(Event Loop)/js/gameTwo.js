const playBtnGame2 = document.getElementById('playBtnGame2')
const welcomeGame2 = document.getElementById('welcomeGame2')
const kittyDivGame2 = document.getElementById('kittyGame2')

const schoolDiv = document.getElementById('school')
const homeDiv = document.getElementById('home')
const outsideDiv = document.getElementById('outside')
const subwayDiv = document.getElementById('subway')
const kittyImgGame2 = document.getElementById('kittyImgGame2')
const kittyThought = document.getElementById('thought')
const goBtnGame2 = document.getElementById('goBtnGame2')
const meowSpan = document.getElementById('meowSpan')

// listener

playBtnGame2.addEventListener('click', () => showHideDivs(kittyDivGame2, welcomeGame2))

goBtnGame2.addEventListener('click', () => {
    window.open('gameOne.html', '_blank')
    setItemLocalStorage()
})

// functions

schoolDiv.ondragover = allowDrop
homeDiv.ondragover = allowDrop
outsideDiv.ondragover = allowDrop
subwayDiv.ondragover = allowDrop

function allowDrop(e) {
    e.preventDefault()
}

kittyImgGame2.ondragstart = drag

function drag(e) {
    e.dataTransfer.setData('id', e.target.id)
}

schoolDiv.ondrop = drop
homeDiv.ondrop = drop
outsideDiv.ondrop = drop
subwayDiv.ondrop = drop

function drop(e) {
    let itemId = e.dataTransfer.getData('id')
    if (e.target.id === 'home' 
    || e.target.id === 'outside'
    || e.target.id === 'school'
    || e.target.id === 'subway') {
        e.target.append(meowSpan)
        e.target.append(document.getElementById(itemId))
    } else return

    e.target.append(kittyThought)
    e.target.append(goBtnGame2)

    kittyThought.style.display = 'block'
    goBtnGame2.style.display = 'block'

    kittyImgGame2.addEventListener('mouseover', () => meowSpan.style.opacity = '1')
    kittyImgGame2.addEventListener('mouseleave', () => meowSpan.style.opacity = '0')

    if (e.target.id === 'home') {
        kittyThought.textContent = 'Home, sweet home. Maybe, I should go eat?'
        goBtnGame2.textContent = 'go home'

        goBtnGame2.removeAttribute('class')
        goBtnGame2.classList.add('home')
    } else if (e.target.id === 'outside') {
        kittyThought.textContent = 'The weather is great today. Where should I go for a walk?'
        goBtnGame2.textContent = 'go outside'
        
        goBtnGame2.removeAttribute('class')
        goBtnGame2.classList.add('outside')
    } else if (e.target.id === 'school') {
        kittyThought.textContent = 'Ugh, school... Maybe I should go somewhere else?'
        goBtnGame2.textContent = 'go to school'

        goBtnGame2.removeAttribute('class')
        goBtnGame2.classList.add('school')
    } else if (e.target.id === 'subway') {
        kittyThought.textContent = 'There are not many people in the subway today. Where shall we go?'
        goBtnGame2.textContent = 'go to the subway'

        goBtnGame2.removeAttribute('class')
        goBtnGame2.classList.add('subway')
    } else return

    changeOpacity(homeDiv)
    changeOpacity(schoolDiv)
    changeOpacity(outsideDiv)
    changeOpacity(subwayDiv)
}

function changeOpacity(divName) {
    if (divName.childElementCount !== 0) {
        divName.style.opacity = '1'
    } else {
        divName.style.opacity = '.5'
    }
}

function setItemLocalStorage() {
    localStorage.setItem('bgImgId', JSON.stringify(goBtnGame2.className))
}