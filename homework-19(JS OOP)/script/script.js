// Index Elements

const signDiv = document.getElementById('signDiv')
const signInBtnStart = document.getElementById('signInBtnStart')
const signUpBtnStart = document.getElementById('signUpBtnStart')
const btnAllUsers = document.getElementById('btnAllUsers')

const signInDiv = document.getElementById('signInDiv')
const signInForm = document.getElementById('signInForm')
const returnBtnSignInForm = document.getElementById('returnBtnSignInForm')

const signUpDiv = document.getElementById('signUpDiv')
const signUpForm = document.getElementById('signUpForm')
const profession = document.getElementById('professionSelect')
const returnBtnSignUpForm = document.getElementById('returnBtnSignUpForm')
const signUpBtn = document.getElementById('signUpBtn')

const successRegist = document.getElementById('successRegist')
const returnBtnSuccessRegist = document.getElementById('returnBtnSuccessRegist')
const scsSignIn = document.getElementById('scsSignIn')


// Handlers

signInBtnStart.addEventListener('click', () => showHideDivs(signInDiv, signDiv))
signUpBtnStart.addEventListener('click', () => showHideDivs(signUpDiv, signDiv))
btnAllUsers.addEventListener('click', () => window.location.href = '../pages/allUsers.html')

returnBtnSignInForm.addEventListener('click', () => showHideDivs(signDiv, signInDiv))
returnBtnSignUpForm.addEventListener('click', () => showHideDivs(signDiv, signUpDiv))

returnBtnSuccessRegist.addEventListener('click', () => showHideDivs(signDiv, successRegist))
scsSignIn.addEventListener('click', () => showHideDivs(signInDiv, successRegist))

profession.addEventListener('change', (event) => {
    // get profession selected by user
    const selectedProfession = Number(event.target.value)

    // create a specific specialist depending on selected profession
    const specialist = specialistFactory(selectedProfession)

    specialist.showProfessionInfo()
})

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const userData = getFormData('signUpForm', 'signUpBtn')
    const currentUser = localStorage.getItem(userData.email)

    if (currentUser) {
        alert("this user already exists")
        // back to login in form
        return
    }

    const selectedProfession = Number(profession.value)
    if (isNaN(selectedProfession)) {
        alert("please choose profession")
        return
    }

    let user = specialistFactory(selectedProfession)
    user.assignFrom(userData)
    user.registration()

    showHideDivs(successRegist, signUpDiv)
})

signInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const signInEmail = document.getElementById('signInEmail').value
    const signInPassword = document.getElementById('signInPassword').value

    const userData = localStorage.getItem(signInEmail)

    if (userData) {
        const user = JSON.parse(userData)
        
        if (user.password === signInPassword) {
            localStorage.setItem('currentUser', signInEmail)
            window.location.href = '../pages/userProfile.html'
        } else {
            alert('Password is not correct')
        }
    } else {
        alert('User is not found.')
    }
})