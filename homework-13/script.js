const garage = [
    {
        name: 'BMW',
        model: 'X5',
        productionYear: 2019,
        price: 33000,
        run: 66000
    },
    {
        name: 'BMW',
        model: 'X6',
        productionYear: 2020,
        price: 33500,
        run: 66500
    },
    {
        name: 'Ford',
        model: 'Mustang',
        productionYear: 2020,
        price: 28000,
        run: 37000
    },
    {
        name: 'MB',
        model: 'EQC',
        productionYear: 2023,
        price: 71000,
        run: 0
    },
    {
        name: 'Audi',
        model: 'A6',
        productionYear: 2018,
        price: 59800,
        run: 89000
    },
    {
        name: 'Subaru',
        model: 'Impreza',
        productionYear: 2015,
        price: 9300,
        run: 201000
    }
]

// Add In Garage

function addNewKey(cars, propertyName) {
    for (const car of cars) {
        car[propertyName] = false
    }
}
addNewKey(garage, 'inGarage')

// Update In Garage

function updateCarProperty(name, model, key, value) {
    let index = garage.findIndex(
        car => car.name === name
        && car.model === model)

    if (index === -1) {
        console.log(`Car not found: ${name}, ${model}`)
        return
    }

    let car = garage[index]
    car[key] = value
}

updateCarProperty('Ford', 'Mustang', 'inGarage', true)
updateCarProperty('BMW', 'X5', 'inGarage', true)
updateCarProperty('Audi', 'A6', 'inGarage', true)


// Homework DOM

function tableCreate() {
    const body = document.body
    
    const tbl = document.createElement('table')
    const tblBody = document.createElement('tbody')
    
        const tr = document.createElement('tr')

        for (const key of Object.keys(garage[0])) {
            const th = document.createElement('th')
            th.appendChild(document.createTextNode(key))
            tr.appendChild(th)
        }

    tblBody.appendChild(tr)
    

    for (const car of garage) {
        const tr = document.createElement('tr')

        for (const key of Object.values(car)) {
            const td = document.createElement('td')
            td.appendChild(document.createTextNode(key))
            tr.appendChild(td)
        }
        tblBody.appendChild(tr)
    }

    body.appendChild(tbl)
    tbl.appendChild(tblBody)
}

tableCreate()

// Add Car Elements

const formAddCar = document.querySelector('#formAddCar')
const inputNameAddCar = document.querySelector('#inputNameAddCar')
const inputModelAddCar = document.querySelector('#inputModelAddCar')
const inputProductionYearAddCar = document.querySelector('#inputProductionYearAddCar')
const inputPriceAddCar = document.querySelector('#inputPriceAddCar')
const inputRunAddCar = document.querySelector('#inputRunAddCar')
const inputInGarageAddCar = document.querySelector('#inputInGarageAddCar')

const btnAddCar = document.querySelector('#btnAddCar')

const table = document.querySelector('table')
const tbody = document.querySelector('tbody')
const tr = document.querySelectorAll('tbody tr')
const th = document.querySelectorAll('tbody tr th')

// Add Car

btnAddCar.addEventListener('click', function addRow(event) {
    event.preventDefault()

    let row = table.insertRow(-1)
    
    let nameCell = row.insertCell(0)
    let modelCell = row.insertCell(1)
    let productionYearCell = row.insertCell(2)
    let priceCell = row.insertCell(3)
    let runCell = row.insertCell(4)
    let inGarageCell = row.insertCell(5)

    nameCell.innerHTML = inputNameAddCar.value
    modelCell.innerHTML = inputModelAddCar.value
    productionYearCell.innerHTML = inputProductionYearAddCar.value
    priceCell.innerHTML = inputPriceAddCar.value
    runCell.innerHTML = inputRunAddCar.value
    inGarageCell.innerHTML = inputInGarageAddCar.value
})

// Remove Car Elements

const inputNameDeleteCar = document.querySelector('#inputNameDeleteCar')
const inputModelDeleteCar = (document.querySelector('#inputModelDeleteCar'))

const btnDeleteCar = document.querySelector('#btnDeleteCar')

//  Remove Car

btnDeleteCar.addEventListener('click', function deleteCar(event) {
    event.preventDefault()

    Array.from(tr)
    .filter(row => Array.from(row.children).filter(col => col.innerText.toUpperCase() === inputNameDeleteCar.value.toUpperCase()).length !== 0)
    .filter(row => Array.from(row.children).filter(col => col.innerText.toUpperCase() === inputModelDeleteCar.value.toUpperCase()).length !== 0)
    .forEach(row => tbody.removeChild(row))
})

// Sort Name, Model, Production Year, Price, Run, In Garage

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx))

th.forEach(th => th.addEventListener('click', (() => {
    Array.from(tbody.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => tbody.appendChild(tr))
})))

// Car Search Elements

const inputNameSearchCar = document.querySelector('#inputNameSearchCar')
const inputModelSearchCar = document.querySelector('#inputModelSearchCar')

// Car Search (name || model)

function searchCarByNameOrModel() {
    const filterName = inputNameSearchCar.value.toUpperCase()
    const filterModel = inputModelSearchCar.value.toUpperCase()

    for (const row of tr) {
        let tdName = row.getElementsByTagName("td")[0]
        let tdModel = row.getElementsByTagName("td")[1]

        if (tdName || tdModel) {
            let carName = (tdName.textContent || tdName.innerHTML).toUpperCase()
            let carModel = (tdModel.textContent || tdModel.innerHTML).toUpperCase()

            if (carName && carName.indexOf(filterName) > -1 &&
                carModel && carModel.indexOf(filterModel) > -1)
            {
                row.style.display = ''
            } else {
                row.style.display = 'none'
            }
        }
    }
}

// Update Car Run Elements

const btnUpdateCarRun = document.querySelector('#btnUpdateCarRun')

const inputNameUpdateCarRun = document.querySelector('#inputNameUpdateCarRun')
const inputModelUpdateCarRun = document.querySelector('#inputModelUpdateCarRun')
const inputUpdateCarRun = document.querySelector('#inputUpdateCarRun')

// Update Car Run

btnUpdateCarRun.addEventListener('click', function updateCarRun(event) {
    event.preventDefault()
    
    Array.from(tr)
    .filter(row => Array.from(row.children).filter(col => col.innerText.toUpperCase() === inputNameUpdateCarRun.value.toUpperCase()).length !== 0)
    .filter(row => Array.from(row.children).filter(col => col.innerText.toUpperCase() === inputModelUpdateCarRun.value.toUpperCase()).length !== 0)
    .forEach(row => row.children[4].textContent = inputUpdateCarRun.value)

})

// Update In Garage Status

function updateInGarargeStatus() {
    for (let i = 1; i < tr.length; i++) {
        let row = tr[i]
        let tdInGarage = row.children[5]
        tdInGarage.style.cursor = 'pointer'

        tdInGarage.addEventListener('click', function change() {
            
            if (tdInGarage.innerHTML === 'true') {
                tdInGarage.innerHTML = 'false'
            } else {
                tdInGarage.innerHTML = 'true'
            }
        })
    }
}

updateInGarargeStatus()

// Show/Hide Div

function toggleDiv(id) {
    let div = document.getElementById(id)
    let divMenus = document.getElementsByClassName('divMenu')

    for (const dm of divMenus) {
        dm.style.display = 'none'
    }

    if (div.style.display === 'block') {
        div.style.display = 'none'
    } else {
        div.style.display = 'block'
    }
}

//  Tooltip

let tooltipName = document.createElement('span')
tooltipName.innerHTML = 'Click to sort!'
tooltipName.classList.add('tooltip')
th[0].appendChild(tooltipName)

for (let i = 0; i < th.length; i++) {
    const element = th[i];
    element.addEventListener('mouseover', showTooltip)
    element.addEventListener('mouseout', hideTooltip)
}

function showTooltip() {
    const tooltip = document.querySelector(".tooltip");
    tooltip.style.display = "block";
}

function hideTooltip() {
    const tooltip = document.querySelector(".tooltip");
    tooltip.style.display = "none";
 }