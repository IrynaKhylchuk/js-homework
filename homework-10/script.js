const garage = [
    {
        name: 'BMW',
        model: 'x5',
        productionYear: 2019,
        price: 33000,
        run: 66000
    },
    {
        name: 'BMW',
        model: 'x6',
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

console.log('----------Task 1----------')
function logCar(cars) {
    for (const car of cars) {
        console.log(`${car.name}, ${car.model}, ${car.productionYear}, ${car.price}, ${car.run}km`)
    }
}

logCar(garage)
console.log('')


console.log('----------Task 2----------')
console.log(`The number of cars in the garage: ${garage.length}.`)
console.log('')


console.log('----------Task 3----------')
let sorted = garage.toSorted((a, b) => a.price - b.price)

logCar(sorted)
console.log('')


console.log('----------Task 4----------')
sorted = garage.toSorted((a, b) => a.productionYear - b.productionYear)

logCar(sorted)
console.log('')


console.log('----------Task 5----------')
sorted = garage.toSorted((a, b) => a.run - b.run)

logCar(sorted)
console.log('')


console.log('----------Task 6----------')
function findCar(cars, query) {
    query = query.toLowerCase()
    let carFound = false
    for (const car of cars) {
        if (car.name.toLowerCase() === query || car.model.toLowerCase() === query) {
            console.log(`${car.name}, ${car.model}, ${car.productionYear}, ${car.price}, ${car.run}km`)
            carFound = true
        }
    }

    if (!carFound) console.log(`No car found for query: ${query}`)
}

findCar(garage, 'subaеu')
findCar(garage, 'mustang')
findCar(garage, 'bmw')
console.log('')


console.log('----------Task 7----------')
function addCar(name, model, productionYear, price, run) {
    garage.push({
        name: name,
        model: model,
        productionYear: productionYear,
        price: price,
        run: run
    })
}

addCar('Audi', 'A8', 2021, 67900, 62000)
logCar(garage)
console.log('')


console.log('----------Task 8----------')
function removeCar(name, model, productionYear, price, run) {
    let index = garage.findIndex(
        car => car.name === name 
            && car.model === model
            && car.productionYear === productionYear
            && car.price === price
            && car.run === run)

    if (index === -1) {
        console.log(`Car not found: ${name}, ${model}, ${productionYear}, ${price}, ${run}km`)
        return
    }
    garage.splice(index, 1)
}

removeCar('BMW', 'x6', 2020, 33500, 66500)
//removeCar('BMW', 'X6', 2020, 33500, 66500)
logCar(garage)
console.log('')


console.log('----------Task 9----------')
function updateCarRun(name, model, productionYear, price, run, newRun) {
    let index = garage.findIndex(
        car => car.name === name 
            && car.model === model
            && car.productionYear === productionYear
            && car.price === price
            && car.run === run)

    if (index === -1) {
        console.log(`Car not found: ${name}, ${model}, ${productionYear}, ${price}, ${run}km`)
        return
    }

    garage[index].run = newRun
}

updateCarRun('Ford', 'Mustang', 2020, 28000, 37000, 40000)
//updateCarRun('Ford', 'Fustang', 2020, 28000, 37000, 40000)
logCar(garage)
console.log('')


console.log('----------Task 10----------')
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

updateCarProperty('Ford', 'Mustang', 'productionYear', 2000)
console.log('')


console.log('----------Task 11----------')
function addNewKey(cars, propertyName) {
    for (const car of cars) {
        car[propertyName] = null
    }
}
addNewKey(garage, 'inGarage')

function logObjectArray(array) {
    for (const element of array) {
        for (const [key, value] of Object.entries(element)) {
            console.log(`${key}: ${value}`)
        }
        console.log('')
    }
}

logObjectArray(garage)


console.log('----------Task 12----------')
function updateCarInGarage(name, model) {
    let index = garage.findIndex(
        car => car.name === name 
            && car.model === model)

    if (index === -1) {
        console.log(`Car not found: ${name}, ${model}`)
        return
    }

    let car = garage[index]
    
    if (car.inGarage === true) {
        console.log(`This car is in garage.`)
    } else {
        console.log(`This car is not in garage.`)
    }
}

updateCarProperty('Ford', 'Mustang', 'inGarage', true)
updateCarInGarage('Ford', 'Mustang')