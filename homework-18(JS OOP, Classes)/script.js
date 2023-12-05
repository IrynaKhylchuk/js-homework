//#region Initialization
let cars = JSON.parse(localStorage.getItem('cars'))

if (!cars) {
    cars = [
        new Car('Audi', 'Q5', 2018, 167000, 93, 'https://i0.wp.com/wintertyrereviews.co.uk/wp-content/uploads/2014/10/10q532fsi_14_hrgb-Q5-winter.jpg'),
        new Car('Lexus', 'RX350', 2016, 71000, 105, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-5558-1674100914.jpeg', "on"),
        new Car('BMW', 'X5 M', 2022, 3000, 181, 'https://i.pinimg.com/736x/7d/09/b0/7d09b067f0bf29b8f9e039b0161510c4.jpg')
    ]
}

let garage = new Garage(cars.map(car => {
    let carObj = new Car()
    Object.assign(carObj, car)

    return carObj
}))

const carIdAttrName = 'carId'
const carsListId = 'carsList'

const carAddBtn = document.getElementById('carAddBtn')
const carEditBtn = document.getElementById('carEditBtn')

const modalAddEditCar = document.getElementById('modalAddEditCar')
const addEditCarForm = document.getElementById('addEditCarForm')
const modalBoxCloseBtn = document.getElementById('modalBoxCloseBtn')
const addCarBtn = document.getElementById('addCarBtn')
const saveCarBtn = document.getElementById('saveCarBtn')

//#endregion

//#region Handlers

window.addEventListener('click', (event) => {
    if (event.target === modalAddEditCar) {
        modalAddEditCar.style.display = 'none'

        addEditCarForm.reset()
      }
})

carAddBtn.addEventListener('click', () => {
    modalAddEditCar.style.display = 'block'
    saveCarBtn.style.display = 'none'
    addCarBtn.style.display = 'block'
    document.getElementById('modalHeader').innerHTML = 'Add car'
})

modalBoxCloseBtn.addEventListener('click', () => {
    modalAddEditCar.style.display = 'none'

    addEditCarForm.reset()
})

addCarBtn.addEventListener('click', (event) => {
    event.preventDefault()

    if (!addEditCarForm.checkValidity()){
        alert('Please fill out all the fields')

        return
    }

    const carData = getFormData('addEditCarForm', 'addCarBtn')
    const car = new Car()
    car.SetFromObject(carData)
    garage.AddCar(car)
    localStorage.setItem('cars', JSON.stringify(garage.GetCars()))
    refreshCarsList(garage, carsListId)
    
    modalAddEditCar.style.display = 'none'
    addEditCarForm.reset()
})

saveCarBtn.addEventListener('click', (event) => {
    event.preventDefault()

    if (!addEditCarForm.checkValidity()){
        alert('Please fill out all the fields')

        return
    }

    const carData = getFormData('addEditCarForm', 'addCarBtn')
    const car = new Car()
    car.SetFromObject(carData)
    garage.EditCar(carData.id, car)
    localStorage.setItem('cars', JSON.stringify(garage.GetCars()))
    refreshCarsList(garage, carsListId)

    modalAddEditCar.style.display = 'none'
    addEditCarForm.reset()
})

//#endregion

//#region Html generation
function createCarDiv(car) {
    // Car Div
    const carDiv = document.createElement('div')
    carDiv.classList.add('carDiv')

    // Img Div
    const carImgDiv = createImgDiv(car)
    
    // Info Div
    const carInfoDiv = createInfoDiv(car)

    // Edit Div
    const carEditDiv = createEditDiv(car, carDiv)

    carDiv.appendChild(carImgDiv)
    carDiv.appendChild(carInfoDiv)
    carDiv.appendChild(carEditDiv)

    return carDiv
}

function createEditDiv(car, carDiv) {
    const carEditDiv = document.createElement('div')
    carEditDiv.classList.add('carEditDiv')

    const carEditSpanAvailable = createAvailableSpan(car)
    const carEditSpanUnavailable = createUnavailableSpan(car, carDiv)

    const carEditBtn = createEditBtn(car)
    const carDeleteBtn = createDeleteBtn(car)

    carEditDiv.appendChild(carEditSpanAvailable)
    carEditDiv.appendChild(carEditSpanUnavailable)
    carEditDiv.appendChild(carEditBtn)
    carEditDiv.appendChild(carDeleteBtn)

    return carEditDiv
}

function createAvailableSpan(car) {
    const carEditSpanAvailable = document.createElement('span')
    carEditSpanAvailable.innerHTML = 'Available'
    carEditSpanAvailable.classList.add('available')

    if (car.isAvailableForRent == "on") {
        carEditSpanAvailable.style.visibility = 'visible'
    } else {
        carEditSpanAvailable.style.visibility = 'hidden'
    }

    return carEditSpanAvailable
}

function createUnavailableSpan(car, parentDiv) {
    const carEditSpanUnavailable = document.createElement('span')
    carEditSpanUnavailable.innerHTML = 'Unavailable'
    carEditSpanUnavailable.classList.add('unavailable')

    if (car.isAvailableForRent != "on") {
        carEditSpanUnavailable.style.visibility = 'visible'
        parentDiv.classList.add('unavailableCar')
    } else {
        carEditSpanUnavailable.style.visibility = 'hidden'
    }

    return carEditSpanUnavailable
}

function createEditBtn(car) {
    const carEditBtn = document.createElement('button')
    carEditBtn.type = 'button'
    carEditBtn.setAttribute(carIdAttrName, car.id)
    carEditBtn.innerHTML = 'Edit'

    carEditBtn.addEventListener('click', (event) => {
        const carId = event.target.getAttribute(carIdAttrName)
        let car = garage.GetCarById(carId)

        setFormDataFromObj(car)

        document.getElementById('modalHeader').innerHTML = 'Edit car'
        modalAddEditCar.style.display = 'block'
        addCarBtn.style.display = 'none'
        saveCarBtn.style.display = 'block'
    })

    return carEditBtn
}

function createDeleteBtn(car) {
    const carDeleteBtn = document.createElement('button')
    carDeleteBtn.type = 'button'
    carDeleteBtn.setAttribute(carIdAttrName, car.id)
    carDeleteBtn.id = 'carDeleteBtn'
    carDeleteBtn.innerHTML = 'Delete'

    carDeleteBtn.addEventListener('click', (event) => {
        const carId = event.target.getAttribute(carIdAttrName)
        garage.RemoveCarById(carId)

        localStorage.setItem('cars', JSON.stringify(garage.GetCars()))

        refreshCarsList(garage, carsListId)
    })

    return carDeleteBtn
}

function createImgDiv(car) {
    const carImgDiv = document.createElement('div')
    const carImg = document.createElement('img')
    carImg.src = car.imagePath

    carImgDiv.classList.add('carImgDiv')
    carImg.classList.add('carImg')

    carImgDiv.appendChild(carImg)

    return carImgDiv
}

function createInfoDiv(car) {
    const carInfoDiv = document.createElement('div')
    const headerCarInfo = document.createElement('h2')
    
    carInfoDiv.classList.add('carInfoDiv')
    headerCarInfo.textContent = 'Car Information'

    const carInfoList = createInfoList(car)

    carInfoDiv.appendChild(headerCarInfo)
    carInfoDiv.appendChild(carInfoList)
    
    return carInfoDiv
}

function createInfoList(car) {
    const carInfoList = document.createElement('ul')
    
    carInfoList.appendChild(createListElement(`<b>Brand</b>: ${car.brand}`))
    carInfoList.appendChild(createListElement(`<b>Model</b>: ${car.model}`))
    carInfoList.appendChild(createListElement(`<b>Manufacture year</b>: ${car.manufactureYear}`))
    carInfoList.appendChild(createListElement(`<b>Run</b>: ${car.run}`))
    carInfoList.appendChild(createListElement(`<b>Price per day</b>: $${car.pricePerDay}`))

    return carInfoList
}

function createListElement(content) {
    let li = document.createElement('li')
    li.innerHTML = content

    return li
}

function createCarsList(garage, listId) {
    let cars = garage.GetCars()

    const carsList = document.createElement('ul')
    carsList.id = listId
    
    for (const car of cars) {
        const li = document.createElement('li')
        
        li.appendChild(createCarDiv(car))

        carsList.appendChild(li)
    }
    
    return carsList
}

function refreshCarsList(garage, listId) {
    const carsList = document.getElementById(listId)

    if (carsList) {
        carsList.remove()
    }

    const container = document.querySelector('.container')
    container.appendChild(createCarsList(garage, listId))
}
//#endregion

refreshCarsList(garage, carsListId)