// Index Elements

const exitUserProfileBtn = document.getElementById('exitUserProfileBtn')

const doctorProfileDiv = document.getElementById('doctorProfileDiv')
const teacherProfileDiv = document.getElementById('teacherProfileDiv')
const driverProfileDiv = document.getElementById('driverProfileDiv')
const salespersonProfileDiv = document.getElementById('salespersonProfileDiv')

const deleteUserProfileBtn = document.getElementById('deleteUserProfileBtn')

// Handlers

exitUserProfileBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser')
    window.location.href = '../pages/index.html'
})

deleteUserProfileBtn.addEventListener('click', () => {
    window.location.href = '../pages/index.html'
})

const currentUserEmail = localStorage.getItem('currentUser')

function setUserData() {
    const currentUserObj = JSON.parse(localStorage.getItem(currentUserEmail))
    const currentUser = specialistFactory(currentUserObj.profession)
    currentUser.assignFrom(currentUserObj)
    currentUser.showUserInfo()
}

setUserData()

// Delete User 

deleteUserProfileBtn.addEventListener('click', () => {
    localStorage.removeItem(currentUserEmail)
    localStorage.removeItem('currentUser')
})