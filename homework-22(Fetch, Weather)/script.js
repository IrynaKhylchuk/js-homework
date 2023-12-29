//#region Index Elements

const aboutDiv = document.getElementById('aboutDiv')
const formDiv = document.getElementById('formDiv')
const infoDiv = document.getElementById('infoDiv')

const nextBtn = document.getElementById('nextBtn')
const nextBtnForm = document.getElementById('nextBtnForm')

const searchInput = document.getElementById('searchInput')

//#endregion

//#region Handlers

nextBtn.addEventListener('click', () => showHideDivs(formDiv, aboutDiv))

nextBtnForm.addEventListener('click', showWeather)

window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        showWeather()
    }
})

document.getElementById('backBtnInfo').addEventListener('click', () => {
    showHideDivs(formDiv, infoDiv)

    searchInput.style.border = 'none'
    searchInput.value = ''
})

//#endregion

//#region Show Weather
function showWeather() {
    if (searchInput.value.length === 0) {
        searchInput.style.border = '2px solid red'
    } else {
        const cityName = searchInput.value
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ua&units=metric&appid=19f7e61a7328167f20735e3a709d5e7e`
        showWeatherForCity(url)

        showHideDivs(infoDiv, formDiv)
    }
}

const showWeatherForCity = async(url) => {
    try {
        const weatherResponse = await fetch(url)
        const weatherData = await weatherResponse.json()
        console.log('response -> ', weatherResponse)
        console.log('data -> ', weatherData)

        if (weatherResponse.status === 404) {
            searchInput.style.borderColor = 'red'
        }

        getInfo(weatherData)
    } catch (error) {
        console.error('Error: ', error)
    }
}

function getInfo(data) {
    
    const weatherDesc = data.list[0].weather[0].icon

    document.querySelector('#location').innerHTML = `${data.city.country}, ${data.city.name}`
    document.querySelector('#time').innerHTML = `${data.list[0].dt_txt}`
    document.querySelector('#weatherStatus').src = `http://openweathermap.org/img/wn/${weatherDesc}@2x.png`
    document.querySelector('#temperature').innerHTML = `${Math.floor(data.list[0].main.temp)}<span> °C</span>`
    document.querySelector('#fellsLike').innerHTML = `${Math.floor(data.list[0].main.feels_like)}°C`
    document.querySelector('#maxTemp').innerHTML = `${Math.floor(data.list[0].main.temp_max)}°C`
    document.querySelector('#minTemp').innerHTML = `${Math.floor(data.list[0].main.temp_min)}°C`
    document.querySelector('#windSpeed').innerHTML = `${data.list[0].wind.speed} m/s`
    document.querySelector('#humidity').innerHTML = `${data.list[0].main.humidity} %`
    document.querySelector('#pressure').innerHTML = `${data.list[0].main.pressure} hPa`
    document.querySelector('#sealevel').innerHTML = ` ${data.list[0].main.sea_level} hPa`
    document.querySelector('#visibility').innerHTML = `${data.list[0].visibility} m`
}

//#endregion

//#region Util

function showHideDivs(showDiv, hideDiv) {
    if (showDiv.style.display === ''
    || showDiv.style.display === 'none') 
    {
        hideDiv.style.display = 'none'
        showDiv.style.display = 'block'
    } else {
        showDiv.style.display = 'none'
    }
}

//#endregion