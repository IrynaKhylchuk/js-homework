// User Profile Elements

const exitUserProfileBtn = document.querySelector('#exitUserProfileBtn')
const changeUserProfileBtn = document.querySelector('#changeUserProfileBtn')
const deleteUserProfileBtn = document.querySelector('#deleteUserProfileBtn')

const userProfileInfoDiv = document.querySelector('#userProfileInfoDiv')
const changeUserProfileInfoDiv = document.querySelector('#changeUserProfileInfoDiv')
const saveBtn = document.querySelector('#saveBtn')

// User Profile

exitUserProfileBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser')
    window.location.href = '../pages/index.html'
})

changeUserProfileBtn.addEventListener('click', () => {
    setFormDataFromObj(currentUser)
    showHideDivs(changeUserProfileInfoDiv, userProfileInfoDiv)
})

deleteUserProfileBtn.addEventListener('click', () => {
    window.location.href = '../pages/index.html'
})

saveBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const userData = getFormData('userForm', 'saveBtn')
    Object.assign(currentUser, userData)
    localStorage.setItem(currentUserEmail, JSON.stringify(currentUser))
    
    refreshUserData()
    showHideDivs(userProfileInfoDiv, changeUserProfileInfoDiv)
})


// Create User Profile

const userName = document.getElementById('userName')
const userSurname = document.getElementById('userSurname')
const userPatronymic = document.getElementById('userPatronymic')
const userEmail = document.getElementById('userEmail')
const userBirthday = document.getElementById('userBirthday')
const userSex = document.getElementById('userSex')
const userStatus = document.getElementById('userStatus')
const userSince = document.getElementById('userSince')
const userPosition = document.getElementById('userPosition')
const userGroup = document.getElementById('userGroup')
const userLocation = document.getElementById('userLocation')

const currentUserEmail = localStorage.getItem('currentUser')
const currentUser = JSON.parse(localStorage.getItem(currentUserEmail))

refreshUserData()

// Push Data

function refreshUserData() {

    for (const [key, value] of Object.entries(currentUser)) {
        if (value === undefined || value === '') {
            currentUser[key] = 'N/A'
        }
    }

    userName.innerHTML = currentUser.firstName
    userSurname.innerHTML = currentUser.lastName
    userPatronymic.innerHTML = currentUser.patronymic
    userEmail.innerHTML = currentUser.email
    userBirthday.innerHTML = currentUser.birthday
    userSex.innerHTML = currentUser.sex
    userStatus.innerHTML = currentUser.status
    userSince.innerHTML = currentUser.since
    userPosition.innerHTML = currentUser.position
    userGroup.innerHTML = currentUser.group
    userLocation.innerHTML = currentUser.location
}


// Delete User 

deleteUserProfileBtn.addEventListener('click', () => {
    localStorage.removeItem(currentUserEmail)
    localStorage.removeItem('currentUser')
})