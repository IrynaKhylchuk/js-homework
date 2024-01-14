const kittyDiv = document.getElementById('kitty')
const kittyImg = document.getElementById('kittyImg')

const centerDiv = document.getElementById('centerDiv')
const playBtn = document.getElementById('playBtn')

// listeners

playBtn.addEventListener('click', () => {
    showHideDivs(kittyDiv, centerDiv)
    changeBackground()
})

// wasd & arrows

let step = 10
let isKittyRunning = false

const toNum = (pxVal) => {
    return parseInt(pxVal, 10)
}

window.addEventListener('keydown', (e) => {
    let rect = kittyImg.getBoundingClientRect()
    let top = toNum(rect.top)
    let left = toNum(rect.left)

    switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
            if (top <= 0) {
                kittyImg.style.top = 0
                return
            }
            kittyImg.style.top = top - step + 'px'
            setImage(true, e.code)
        break
        case 'KeyA':
        case 'ArrowLeft':
            if (left <= 0) {
                kittyImg.style.left = 0
                return
            }
            kittyImg.style.left = left - step + 'px'
            setImage(true, e.code)
        break
        case 'KeyS':
        case 'ArrowDown':
            if (top >= window.innerHeight - kittyImg.height) {
                kittyImg.style.top = window.innerHeight
                return
            }
            kittyImg.style.top = top + step + 'px'
            setImage(true, e.code)
        break
        case 'KeyD':
        case 'ArrowRight':
            if (left >= window.innerWidth - kittyImg.width) {
                kittyImg.style.left = window.innerWidth
                return
            }
            kittyImg.style.left = left + step + 'px'
            setImage(true, e.code)
        break
    }
})

function setImage(shouldKittyRun, keyCode) {
    if (isKittyRunning === shouldKittyRun) {
        return
    }

    if (shouldKittyRun) {
        switch (keyCode) {
            case 'KeyW':
            case 'ArrowUp':
                kittyImg.src = 'imgs/kitty/run/runUp.gif'
            break
            case 'KeyA':
            case 'ArrowLeft':
                kittyImg.src = 'imgs/kitty/run/runLeft.gif'
            break
            case 'KeyS':
            case 'ArrowDown':
                kittyImg.src = 'imgs/kitty/run/runDown.gif'
            break
            case 'KeyD':
            case 'ArrowRight':
                kittyImg.src = 'imgs/kitty/run/runRight.gif'
            break
            default:
                kittyImg.src = 'imgs/kitty/sit/sitTrans.gif'
        }
    } else {
        kittyImg.src = 'imgs/kitty/sit/sitTrans.gif'
    }

    isKittyRunning = shouldKittyRun
}

window.addEventListener('keyup', () => {
    setImage(false)
})

// change bg

function changeBackground() {
    let bgImgId = JSON.parse(localStorage.getItem('bgImgId'))
    
    switch (bgImgId) {
        case 'home':
            document.body.style.backgroundImage = 'url(imgs/background/g2/home.jpg)'
        break
        case 'outside':
            document.body.style.backgroundImage = 'url(imgs/background/g2/outside.jpg)'
        break
        case 'school':
            document.body.style.backgroundImage = 'url(imgs/background/g2/school.jpg)'
        break
        case 'subway':
            document.body.style.backgroundImage = 'url(imgs/background/g2/subway.png)'
        break
        default:
            document.body.style.backgroundImage = 'url(imgs/background/g1/v4.png)'
    }
    
    console.log(JSON.parse(localStorage.getItem('bgImgId')))
}

changeBackground()

window.addEventListener('beforeunload', () => localStorage.removeItem('bgImgId'))