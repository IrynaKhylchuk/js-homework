// Task 1

const userName = prompt('Enter your name:')

alert('Hello, ' + userName)

// Task 2

const yearOfBirth = +prompt('Enter your year of birth:')
const currentYear = 2023

alert('Your age - ' + (currentYear - yearOfBirth))

// Task 3

const squareSide = +prompt('Enter square side:')

alert('Perimeter of a square - ' + 4*squareSide)

// Task 4

const circleRadius = +prompt('Enter the radius of the circle:')

alert('The area of the circle - ' + Math.PI*Math.pow(circleRadius, 2))

// Task 5

const km = +prompt('Enter the distance between the two cities in km:')
const hours = +prompt('Enter the travel time:')

alert('Your speed need to be - ' + km/hours + 'km/h')

// Task 6

const dollar = +prompt('Enter the amount (dollar):')
const euroToDollar = 0.95

alert('The amount (euro) - ' + dollar*euroToDollar)

