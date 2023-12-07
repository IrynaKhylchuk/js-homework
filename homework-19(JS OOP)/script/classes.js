const Professions = {
    "Doctor": 0,
    "Teacher": 1,
    "Driver": 2,
    "Salesperson": 3
}

function specialistFactory(profession) {
    let specialist

    switch (profession) {
        case Professions.Doctor:
            specialist = new Doctor()        
            break

        case Professions.Teacher:
            specialist = new Teacher()        
            break

        case Professions.Driver:
            specialist = new Driver()        
            break

        case Professions.Salesperson:
            specialist = new Salesperson()        
            break
    
        default:
            specialist = new Person()
            break
    }

    return specialist
}

class Person {
    constructor(firstName, lastName, email, birthday, location, password, confirmPassword){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.birthday = birthday
        this.location = location
        this.password = password
        this.confirmPassword = confirmPassword
        
        this.professionDiv = document.getElementById('professionContainer')
        this.userName = document.getElementById('userName')
        this.userSurname = document.getElementById('userSurname')
        this.userEmail = document.getElementById('userEmail')
        this.userBirthday = document.getElementById('userBirthday')
        this.userLocation = document.getElementById('userLocation')
        this.userProfession = document.getElementById('userProfession')
        this.profileImage = document.getElementById('userProfileImg')
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

        if (this.location.length < 1) {
            alert('Location is not valid!')
            return
        }

        if (this.password.length < 6) {
            alert('Password is not valid! The password should be at least six symbol long.')
            return
        }

        if (this.confirmPassword !== this.password) {
            alert('Passwords do not match!')
        }
    }

    hideProfessionInfo() {
        Array.from(this.professionDiv.children).map(child => child.style.display = 'none')
    }

    showProfessionInfo() {
        this.hideProfessionInfo()
    }

    assignFrom(user) {
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.email = user.email
        this.birthday = user.birthday
        this.location = user.location
        this.password = user.password
        this.confirmPassword = user.confirmPassword
    }

    showUserInfo() {
        Array.from(this.professionDiv.children).map(child => child.style.display = 'none')
        this.profileImage.src ??= 'https://www.creativefabrica.com/wp-content/uploads/2023/04/15/Cute-Cat-Kawaii-Chibi-Graphic-67307453-1-1.png'
        this.userName.innerHTML = this.firstName
        this.userSurname.innerHTML = this.lastName
        this.userEmail.innerHTML = this.email
        this.userBirthday.innerHTML = this.birthday
        this.userLocation.innerHTML = this.location
    }
}

class Doctor extends Person {
    constructor(firstName, lastName, email, birthday, location, password, confirmPassword, experience, license, specialization){
        super(firstName, lastName, email, birthday, location, password, confirmPassword)
        this.profession = 'Doctor'
        this.experience = experience
        this.license = license
        this.specialization = specialization

        this.userExperience = document.getElementById('userExperience')
        this.userLicense = document.getElementById('userLicense')
        this.userSpecialization = document.getElementById('userSpecialization')
    }

    registration(){
        super.registration()
        if (this.experience.length < 1) {
            alert('Experience is not valid!')
            return
        }

        if (this.license.length < 1) {
            alert('License is not valid!')
            return
        }

        if (this.specialization.length < 1) {
            alert('Specialization is not valid!')
        }

        this.profession = Professions.Doctor
        localStorage.setItem(this.email, JSON.stringify(this))
    }

    showProfessionInfo() {
        super.showProfessionInfo()
        document.querySelector('.doctor').style.display = 'block'
    }

    assignFrom(user) {
        super.assignFrom(user)
        this.experience = user.experience
        this.license = user.license
        this.specialization = user.specialization
    }

    showUserInfo() {
        this.profileImage.src = 'https://www.creativefabrica.com/wp-content/uploads/2023/04/26/Cute-Cat-Scientist-Kawaii-Chibi-Cartoon-Graphic-68177712-1.png'
        this.userProfession.innerHTML = this.profession
        this.userExperience.innerHTML = this.experience
        this.userLicense.innerHTML = this.license
        this.userSpecialization.innerHTML = this.specialization
        super.showUserInfo()
        document.querySelector('.doctor').style.display = 'block'
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, email, birthday, location, password, confirmPassword, qualification, educationalSubject, teachingExperience){
        super(firstName, lastName, email, birthday, location, password, confirmPassword)
        this.profession = 'Teacher'
        this.qualification = qualification
        this.educationalSubject = educationalSubject
        this.teachingExperience = teachingExperience

        this.userQualification = document.getElementById('userQualification')
        this.userEducationalSubject = document.getElementById('userEducationalSubject')
        this.userTeachingExperience = document.getElementById('userTeachingExperience')
    }

    registration(){
        super.registration()
        if (this.qualification.length < 1) {
            alert('Qualification is not valid!')
            return
        }

        if (this.educationalSubject.length < 1) {
            alert('Educational subject is not valid!')
            return
        }

        if (this.teachingExperience.length < 1) {
            alert('Teaching experience is not valid!')
        }

        this.profession = Professions.Teacher
        localStorage.setItem(this.email, JSON.stringify(this))
    }

    showProfessionInfo() {
        super.showProfessionInfo()
        document.querySelector('.teacher').style.display = 'block'
    }

    assignFrom(user) {
        super.assignFrom(user)
        this.qualification = user.qualification
        this.educationalSubject = user.educationalSubject
        this.teachingExperience = user.teachingExperience
    }

    showUserInfo() {
        this.profileImage.src = 'https://img.freepik.com/premium-vector/cartoon-cute-back-school-teacher-cat-writing-paper_39961-1348.jpg'
        this.userProfession.innerHTML = this.profession
        this.userQualification.innerHTML = this.qualification
        this.userEducationalSubject.innerHTML = this.educationalSubject
        this.userTeachingExperience.innerHTML = this.teachingExperience
        super.showUserInfo()
        document.querySelector('.teacher').style.display = 'block'
    }

}

class Driver extends Person {
    constructor(firstName, lastName, email, birthday, location, password, confirmPassword, driverLicense, driverLicenseCategory, car){
        super(firstName, lastName, email, birthday, location, password, confirmPassword)
        this.profession = 'Driver'
        this.driverLicense = driverLicense
        this.driverLicenseCategory = driverLicenseCategory
        this.car = car

        this.userDriverLicense = document.getElementById('userDriverLicense')
        this.userDriverLicenseCategory = document.getElementById('userDriverLicenseCategory')
        this.userCar = document.getElementById('userCar')
    }

    registration(){
        super.registration()
        if (this.driverLicense.length < 1) {
            alert('Driver license is not valid!')
            return
        }

        if (this.driverLicenseCategory.length < 1) {
            alert('Driver license category is not valid!')
            return
        }

        if (this.car.length < 1) {
            alert('Car is not valid!')
        }

        this.profession = Professions.Driver
        localStorage.setItem(this.email, JSON.stringify(this))
    }

    showProfessionInfo() {
        super.showProfessionInfo()
        document.querySelector('.driver').style.display = 'block'
    }

    assignFrom(user) {
        super.assignFrom(user)
        this.driverLicense = user.driverLicense
        this.driverLicenseCategory = user.driverLicenseCategory
        this.car = user.car
    }

    showUserInfo() {
        this.profileImage.src = 'https://www.creativefabrica.com/wp-content/uploads/2023/06/21/Kawaii-Chibi-Cat-Driving-Convertible-Graphic-72655564-1.png'
        this.userProfession.innerHTML = this.profession
        this.userDriverLicense.innerHTML = this.driverLicense
        this.userDriverLicenseCategory.innerHTML = this.driverLicenseCategory
        this.userCar.innerHTML = this.car
        super.showUserInfo()
        document.querySelector('.driver').style.display = 'block'
    }
}

class Salesperson extends Person {
    constructor(firstName, lastName, email, birthday, location, password, confirmPassword, shop, typeOfProduct, medicalBook){
        super(firstName, lastName, email, birthday, location, password, confirmPassword)
        this.profession = 'Salesperson'
        this.shop = shop
        this.typeOfProduct = typeOfProduct
        this.medicalBook = medicalBook

        this.userShop = document.getElementById('userShop')
        this.userTypeOfProduct = document.getElementById('userTypeOfProduct')
        this.userMedicalBook = document.getElementById('userMedicalBook')
    }

    registration() {
        super.registration()
        if (this.shop.length < 1) {
            alert('Shop is not valid!')
            return
        }

        if (this.typeOfProduct.length < 1) {
            alert('Type of product is not valid!')
            return
        }

        if (this.medicalBook.length < 1) {
            alert('Medical book is not valid!')
        }

        this.profession = Professions.Salesperson
        localStorage.setItem(this.email, JSON.stringify(this))
    }

    showProfessionInfo() {
        super.showProfessionInfo()
        document.querySelector('.salesperson').style.display = 'block'
    }

    assignFrom(user) {
        super.assignFrom(user)
        this.shop = user.shop
        this.typeOfProduct = user.typeOfProduct
        this.medicalBook = user.medicalBook   
    }

    showUserInfo() {
        this.profileImage.src = 'https://png.pngtree.com/png-clipart/20230516/original/pngtree-crafty-cat-selling-wares-in-a-cozy-booth-png-image_9162647.png'
        this.userProfession.innerHTML = this.profession
        this.userShop.innerHTML = this.shop
        this.userTypeOfProduct.innerHTML = this.typeOfProduct
        this.userMedicalBook.innerHTML = this.medicalBook
        super.showUserInfo()
        document.querySelector('.salesperson').style.display = 'block'
    }
}