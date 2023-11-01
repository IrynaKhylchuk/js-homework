// 1. Напишіть функцію, яка перевіряє, чи об'єкт має такі типи як null або undefined, тощо.

const objNull = null
let objUndefined
let objTypes = {
    str: 'It is string!',
    number: 527,
    boolean: true,
    null: null,
    und: undefined,
    arr: [1, 2, 3, 4, 5],
    obj: {
        str1: 'Hello,',
        str2: 'World!'
    },
    fn: function sayHi() {
        console.log('Hello!:)')
    }
}

function findType(obj) {
    if (obj === null) {
        console.log(`Task 1: The type of this object is - null.`)
    } else if (obj === undefined) {
        console.log(`Task 1: The type of this object is - undefined.`)
    } else {
        console.log(`Task 1: The type of this object is - ${typeof(obj)}.`)
    }
}

findType(objNull)
findType(objUndefined)
findType(objTypes)

// 2. Напишіть функцію, яка робить поверхневу перевірку об'єкта на порожнечу (чи є порожні властивості).
// у властивості (або key/property) name є значення (value) - 'Borys'
// у властивості (або key/property) age є значення (value) - 3

const emptyObj = {
    name: 'Borys',
    surname: null,
    age: 3,
    kingdom: 'animal',
    color: 'red',
    bankAccount: null,
    phoneNumber: {
        countyCode: '+380',
        number: null
    }
}

function shallowCheckForNull(obj){
    for (const [key, value] of Object.entries(obj)) {
        if (value === null){
            console.log(`Task 2: Property '${key}' is null.`)
        }
    }    
}

shallowCheckForNull(emptyObj)

// 3. Сортування об'єктів за властивістю.
// У вас є масив об'єктів (наприклад: товари з назвою та ціною). 
// Потрібно відсортувати цей масив за певною властивістю (наприклад ціною) 
// в порядку зростання та/або спадання.

const books = [
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        published: 1813
    },
    {
        title: 'Little Women',
        author: 'Louisa May Alcott',
        published: 1868
    },
    {
        title: 'North and South',
        author: 'Elizabeth Gaskell',
        published: 1854
    },
    {
        title: 'Emma',
        author: 'Jane Austen',
        published: 1816
    },
    {
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        published: 1847
    }
]

console.log(books.sort((a, b) => a.published - b.published))
// console.log(books.sort((a, b) => b.published - a.published))