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

function addNewKey(cars, propertyName) {
    for (const car of cars) {
        car[propertyName] = false
    }
}
addNewKey(garage, 'inGarage')

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
    tbl.style.borderCollapse = 'collapse'
    tbl.style.textAlign = 'center'
    tbl.style.margin = '0 0 10px 0'
    
        const tr = document.createElement('tr')

        for (const key of Object.keys(garage[0])) {
            const th = document.createElement('th')
            th.style.padding = '10px'
            th.style.textTransform = 'capitalize'
            th.style.cursor = 'pointer'
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

// Add car

const btnAddCar = document.getElementById('btnAddCar')
const form = document.querySelector('form')

btnAddCar.addEventListener('click', function addRow(event) {
    event.preventDefault()

    let table = document.querySelector('table')
    let row = table.insertRow(-1)
    
    let nameCell = row.insertCell(0)
    let modelCell = row.insertCell(1)
    let productionYearCell = row.insertCell(2)
    let priceCell = row.insertCell(3)
    let runCell = row.insertCell(4)
    let inGarageCell = row.insertCell(5)

    nameCell.innerHTML = form.name.value
    modelCell.innerHTML = form.model.value
    productionYearCell.innerHTML = form.productionYear.value
    priceCell.innerHTML = form.price.value
    runCell.innerHTML = form.run.value
    inGarageCell.innerHTML = form.inGarage.value
})

//  Remove car

const btnDeleteCar = document.querySelector('#btnDeleteCar')

btnDeleteCar.addEventListener('click', function deleteCar(event) {
    event.preventDefault()

    Array.from(document.querySelectorAll("tbody tr"))
    .filter(row => Array.from(row.children).filter(col => col.innerText === form.name.value).length !== 0)
    .filter(row => Array.from(row.children).filter(col => col.innerText === form.model.value).length !== 0)
    .forEach(row => document.querySelector("tbody").removeChild(row))
})

// Sort Name, Model, Production Year, Price, Run, In Garage

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx))

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table')
    const tbody = table.querySelector('tbody')
    Array.from(tbody.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => tbody.appendChild(tr))
})))