class Car {
    constructor(brand, model, manufactureYear, run, pricePerDay, imagePath, isAvailableForRent = "") {
        this.id = crypto.randomUUID()
        this.brand = brand
        this.model = model
        this.manufactureYear = manufactureYear
        this.run = run
        this.pricePerDay = pricePerDay
        this.imagePath = imagePath
        this.isAvailableForRent = isAvailableForRent
    }

    SetFromObject(car) {
        this.brand = car.brand
        this.model = car.model
        this.manufactureYear = car.manufactureYear
        this.run = car.run
        this.pricePerDay = car.pricePerDay
        this.imagePath = car.imagePath
        this.isAvailableForRent = car.isAvailableForRent
    }

    ShowCarIndo() {
        console.log('Brand:', this.brand, ' Model:', this.model, ' Manufacture Year:', this.manufactureYear, ' Run:', this.run, 
        ' Price per day:', this.pricePerDay, ' Is available for rent:', this.isAvailableForRent)
    }

    AddRun(runPlus) {
        if (typeof runPlus !== 'number'){
            console.error('Run not valid!')
        } else if (runPlus < 0){
            console.error(`Run not valid: ${runPlus}`)
        } else {
            this.run += runPlus
        }

        console.log(`Run: ${this.run}`)
    }

    ChangePrice(newPrice) {
        if (typeof newPrice !== 'number'){
            console.error('Price not valid!')
        } else if (newPrice < 0){
            console.error(`Price not valid: ${newPrice}`)
        } else {
            this.pricePerDay = newPrice
        }

        console.log(`Price: ${this.pricePerDay}`)
    }

    ChangeStatus(newStatus) {
        if (typeof newStatus !== 'string') {
            console.error(`Status not valid: ${newStatus}`)
        } else {
            this.isAvailableForRent = newStatus
        }
    }

    ShowStatus() {
        console.log(`Is available for rent: ${this.isAvailableForRent}`)
    }
}

// Homework

const ford = new Car('Ford', 'Mustang', 1967, 1000, 100, '', 'Yes')

ford.ShowCarIndo()
ford.AddRun(200)
ford.ChangePrice(1500)
ford.ChangeStatus('No')
ford.ShowStatus()

// Garage

class Garage {
    constructor(cars) {
        this.cars = cars ?? []
    }

    AddCar(car) {
        this.cars.unshift(car)
    }

    RemoveCarById(carId) {
        const carIndex = this.cars.findIndex(car => car.id === carId)

        if (carIndex > -1) {
            this.cars.splice(carIndex, 1)
        }
    }

    EditCar(id, car) {
        const carIndex = this.cars.findIndex(c => c.id === id)

        if (carIndex > -1) {
            this.cars[carIndex].SetFromObject(car)
        }
    }

    GetCarById(id) {
        const carIndex = this.cars.findIndex(c => c.id === id)

        if (carIndex > -1) {
            return this.cars[carIndex]
        }
        return null
    }

    GetCars() {
        return this.cars
    }
}

// Form Data

function getFormData(formId, submitterId) {
    const form = document.getElementById(formId)
    const submitter = document.getElementById(submitterId)
    const formData = new FormData(form, submitter)

    return Object.fromEntries(formData.entries())
}

function setFormDataFromObj(obj) {
    Object.keys(obj).forEach(key => {
        let input = document.getElementsByName(key)

        if (input.length) {
            if (input[0].type == 'checkbox'){
                input[0].checked = obj[key]
            } else {
                input[0].value = obj[key]
            }
        }
    })
}