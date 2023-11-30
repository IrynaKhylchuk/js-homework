// index elements

const signInBtnStart = document.querySelector('#signInBtnStart')
const signUpBtnStart = document.querySelector('#signUpBtnStart')

const signUpBtn = document.querySelector('#signUpBtn')
const returnBtnSuccessRegist = document.querySelector('#returnBtnSuccessRegist')

const scsSignIn = document.querySelector('#scsSignIn')
const signInBtn = document.querySelector('#signInBtn')

const signDiv = document.querySelector('#signDiv')
const signInDiv = document.querySelector('#signInDiv')
const signUpDiv = document.querySelector('#signUpDiv')
const successRegist = document.querySelector('#successRegist')


// Sign In & Sign Up

signInBtnStart.addEventListener('click', () => showHideDivs(signInDiv, signDiv))
signUpBtnStart.addEventListener('click', () => showHideDivs(signUpDiv, signDiv))
returnBtnSuccessRegist.addEventListener('click', () => showHideDivs(signDiv, successRegist))
scsSignIn.addEventListener('click', () => showHideDivs(signInDiv, successRegist))


// Return Buttons

const returnBtnSignInForm = document.getElementById('returnBtnSignInForm')
const returnBtnSignUpForm = document.getElementById('returnBtnSignUpForm')
returnBtnSignInForm.addEventListener('click', () => showHideDivs(signDiv, signInDiv))
returnBtnSignUpForm.addEventListener('click', () => showHideDivs(signDiv, signUpDiv))

// Sign Up

class User {
    constructor(firstName, lastName, birthday, email, password, confirmPassword){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    registration() {
        if (this.firstName.length < 1) {
            alert('First name is not valid! The first name should be at least one symbol long.')
            return
        }
        if (this.lastName.length < 1) {
            alert('Last name is not valid! The last name should be at least one symbol long.')
            return
        }
        if (this.birthday.length < 1) {
            alert('Date is not valid!')
            return
        }
        if (this.email.length < 1) {
            alert('Email is not valid!')
            return
        }
        if (this.password.length < 6) {
            alert('Password is not valid! The password should be at least six symbol long.')
            return
        }
        if (this.confirmPassword !== this.password) {
            alert('Passwords do not match!')
            return
        }

        localStorage.setItem(this.email, JSON.stringify(this))
        
        showHideDivs(successRegist, signUpDiv)
    }
}

const signUpForm = document.querySelector('#signUpForm')

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const userData = getFormData('signUpForm', 'signUpBtn')
    const currentUser = localStorage.getItem(userData.email)

    if (currentUser) {
        alert("This user already exists. Please, sign in")
    } else {
        const user = new User(
            userData.firstName, 
            userData.lastName, 
            userData.birthday, 
            userData.email,
            userData.password,
            userData.confirmPassword)

        user.registration()
    }
})


//Sign In

const signInForm = document.querySelector('#signInForm')

signInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const signInEmail = document.getElementById('signInEmail').value
    const signInPassword = document.getElementById('signInPassword').value

    const userData = localStorage.getItem(signInEmail)

    if (userData) {
        const user = JSON.parse(userData)
        if (user.password === signInPassword) {
            localStorage.setItem('currentUser', signInEmail)
            window.location.href = '../pages/user.html'
        } else {
            alert('Password is not correct')
        }
    } else {
        alert('User is not found.')
    }
})