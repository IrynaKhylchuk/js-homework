const Ukraine = document.getElementById('Ukraine')
const Germany = document.getElementById('Germany')
const France = document.getElementById('France')
const Austria = document.getElementById('Austria')
const Bulgaria = document.getElementById('Bulgaria')

let country = prompt('Choose a country: \nUkraine \nGermany \nFrance \nAustria \nBulgaria')

switch (country.toLowerCase()) {
    case 'ukraine' :
        Ukraine.style.display = 'block';
        break;
    case 'germany' :
        Germany.style.display = 'block';
        break;
    case 'france' :
        France.style.display = 'block';
        break;
    case 'austria' :
        Austria.style.display = 'block';
        break;
    case 'bulgaria' :
        Bulgaria.style.display = 'block';
        break;
    default :
        alert('This country is not on the list.')
}