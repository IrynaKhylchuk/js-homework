let score = 0
let timer = 10
let gameActive = false
let squareInterval

const startBtn = document.querySelector('#startGameBtn')
const gameContainer = document.querySelector('#game-container')

startBtn.addEventListener('click', startGame)


function updateScore() {
    document.querySelector('#score').textContent = `Score: ${score}`
}


function updateTimer() {
    document.querySelector('#timer').textContent = `Time: ${timer}`
}


function clearGameContainer() {
    gameContainer.lastElementChild.remove()
}


function getRandomPosition() {
    const maxX = gameContainer.clientWidth - 70
    const maxY = gameContainer.clientHeight - 70

    const x = Math.floor(Math.random() * maxX)
    const y = Math.floor(Math.random() * maxY)

    return{x, y}
}


function createRandomSize(max, min) {
    const random = Math.floor(Math.random() * (max - min) + min)
    const randWidth = random
    const randHeight = random

    return {randWidth, randHeight}
}


function createSquare() {
    const level = document.querySelector('select').value
    const square = document.createElement('div')

    const {randWidth, randHeight} = createRandomSize(70, 20)

    square.classList.add('square')

    if (level === 'Easy') {
        square.style.width = '70px'
        square.style.height = '70px'
    } else if (level === 'Medium') {
        square.style.width = '50px'
        square.style.height = '50px'  
    } else if (level === 'Hard') {
        square.style.width = '30px'
        square.style.height = '30px'  
    } else if (level === 'Random') {
        square.style.width = `${randWidth}px`
        square.style.height = `${randHeight}px`
    } else {
        square.style.width = '40px'
        square.style.height = '40px'
    }

    const randomColor = Math.floor(Math.random()*16777215).toString(16)

    const {x, y} = getRandomPosition()

    square.style.left = `${x}px`
    square.style.top = `${y}px`

    square.style.backgroundColor = "#" + randomColor
    
    square.addEventListener('click', () => {
        if (gameActive) {
            score++
            updateScore()
            square.remove()
            createSquare()
        }
    })

    gameContainer.appendChild(square)
}


function startGame() {
    startBtn.style.display = 'none'

    gameActive = true
    score = 0
    timer = parseInt(document.querySelector('#duration').value) || 10

    updateScore()
    updateTimer()

    squareInterval = setInterval(() => {
        if (timer > 0) {
            timer--
            updateTimer()
        } else {
            endGame()
        }
    }, 1000)

    createSquare()
}


function endGame() {
    clearInterval(squareInterval)
    gameActive = false

    clearGameContainer()

    document.querySelector('#gameResultsList').innerHTML = ''

    showResults()
    showResultsModal()

    addScore()

    startBtn.style.display = 'block'
}

// Game Scores

const gameScoresModal = document.getElementById('gameScoresModal')
const gameScoresList = document.querySelector('#gameScoresList')
const gameScoresBtn = document.querySelector('#gameScoresBtn')

let scoresArray = []

function addScore() {
    const newScore = document.createElement('li')
    const spanScore = document.createElement('span')

    spanScore.textContent = score
    newScore.textContent = 'Your score is: '

    scoresArray.push(score)

    const record = document.getElementById('highestScore')
    record.textContent = maxScore()

    newScore.insertAdjacentElement('beforeend', spanScore)
    newScore.appendChild(spanScore)
    gameScoresList.appendChild(newScore)
}

function maxScore() {
    return Math.max(...scoresArray)
}


gameScoresBtn.addEventListener('click', () => {
    const defaultText = 'You do not have any points yet.'

    if (gameScoresList.innerHTML.trim() === '') {
        const defaultTextLi = document.createElement('li')

        defaultTextLi.textContent = defaultText

        gameScoresList.appendChild(defaultTextLi)
    } else {
        let scores = document.getElementById('gameScoresList').children
        if (scores.length > 1 && scores[0].textContent === defaultText) {
            scores[0].remove()
        }
    }

    if (gameScoresModal.style.display === '' 
        || gameScoresModal.style.display === 'none') 
        {
        gameScoresModal.style.display = 'block'
    } else {
        gameScoresModal.style.display = 'none'
    }
})

window.addEventListener('click', function(event) {
    if (event.target === gameScoresModal) {
        gameScoresModal.style.display = 'none'
    }
})

// Results

const gameResultsModal = document.querySelector('#gameResultsModal')
const gameResultsList = document.querySelector('#gameResultsList')
const closeBtn = document.querySelector('#closeBtn')

function showResultsModal() {
    if (gameResultsModal.style.display === '' 
        || gameResultsModal.style.display === 'none') 
        {
        gameResultsModal.style.display = 'block'
    } else {
        gameResultsModal.style.display = 'none'
    }
}

closeBtn.addEventListener('click', () => {
    gameResultsModal.style.display = 'none'
})

function showResults() {
    const scoreLi = document.createElement('li')
    scoreLi.textContent = `Your score: ${score}.`

    const timeLi = document.createElement('li')
    const time = document.querySelector('#duration').value
    timeLi.textContent = `Your time: ${time}.`

    const levelLi = document.createElement('li')
    const level = document.querySelector('#level').value
    levelLi.textContent = `Your level: ${level}.`

    const recordLi = document.createElement('li')
    const record = maxScore()
    

    if (score > record) {
        recordLi.textContent = `Congratulations! You set a new record: ${score}.`
    } else if (score === record) {
        recordLi.textContent = `Your result is equal to the record: ${score}.`
    } else {
        recordLi.textContent = `Your result is less than the record: ${score}. You need to score ${record - score} points to break the record.`
    }

    gameResultsList.appendChild(scoreLi)
    gameResultsList.appendChild(timeLi)
    gameResultsList.appendChild(levelLi)
    gameResultsList.appendChild(recordLi)
}