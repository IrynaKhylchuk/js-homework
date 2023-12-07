const container = document.getElementById('container')

for (let i = 0; i < localStorage.length; i++) {
    
    let userData = localStorage.getItem((localStorage.key(i)))
    const userObj = JSON.parse(userData)
    const user = specialistFactory(userObj.profession)
    user.assignFrom(userObj)

    const userInfoList = document.createElement('ul')

    for (const [key, value] of Object.entries(user)) {
        if (value != null && key !== 'password' && key !== 'confirmPassword') {
            userInfoList.appendChild(createListElement(`<b>${key.toUpperCase()}</b>: ${value}`))
            console.log(key);
        }
    } 

    container.appendChild(userInfoList)
}
    
function createListElement(content) {
    let li = document.createElement('li')
    li.innerHTML = content

    return li
}

const returnBtn = document.createElement('button')
returnBtn.innerHTML = 'Return'
container.appendChild(returnBtn)

returnBtn.addEventListener('click', () => window.location.href = '../pages/index.html')