const currencies = ['USD', 'EUR', 'CHF', 'GBP', 'PLN', 'SEK', 'XAU', 'CAD']
const currencyTable = document.getElementById('currencyTable')
const loader = document.querySelector('.lds-ring')


function showExchangeRates(exchangeRates, currencies, currencyTable) {
    for (const currency of currencies) {
        
        const exchangeRate = exchangeRates.find(exchangeRate => exchangeRate.currency.toUpperCase() === currency.toUpperCase())
        if (exchangeRate === undefined) {
            exchangeRate.purchaseRate = 'N/A'
            exchangeRate.saleRate = 'N/A'
        }

        const tr = document.createElement('tr')
        const tdImg = document.createElement('td')
        const img = document.createElement('img')
        img.src = `imgs/purchase/${currency}.png`
        tdImg.appendChild(img)
        tr.appendChild(tdImg)
        
        const tdCurrency = document.createElement('td')
        tdCurrency.innerHTML = currency
        tr.appendChild(tdCurrency)
        
        const tdPurchase = document.createElement('td')
        tdPurchase.innerHTML = exchangeRate.purchaseRate ?? exchangeRate.purchaseRateNB
        tr.appendChild(tdPurchase)

        const tdSale = document.createElement('td')
        tdSale.innerHTML = exchangeRate.saleRate ?? exchangeRate.saleRateNB
        tr.appendChild(tdSale)
        
        currencyTable.appendChild(tr)
    }
}

async function getExchangeRatesAsync() {
    try{
        loader.style.display = 'block'

        const url = 'https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2023'
        const fileExchangeRates = await fetch(url)
        const dataExchangeRates = await fileExchangeRates.json()

        return dataExchangeRates
    } catch(error) {
        console.error(error)
    } finally {
        loader.style.display = 'none'
    }

    return []
}

const exchangeRatesObj = await getExchangeRatesAsync()
showExchangeRates(exchangeRatesObj.exchangeRate, currencies, currencyTable)