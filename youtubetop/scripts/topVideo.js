//#region get top 5 most popular video

function loadClient() {
    gapi.client.setApiKey('AIzaSyB1s0ywJ9cA4x13ZsEd3i-PIy18SOr8V8k')
    return gapi.client
        .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
        .then(
            function () {
                console.log('GAPI client loaded for API')
            },
            function (err) {
                console.error('Error loading GAPI client for API', err)
            }
        )
}

function execute(countryCode) {
    return gapi.client.youtube.videos
        .list({
            part: ['snippet,contentDetails,statistics,status,player'],
            chart: 'mostPopular',
            regionCode: countryCode
        })
        .then(
            function (response) {
                const fiveVideosData = response.result.items

                for (const videoData of fiveVideosData) {
                    let imgSrc = videoData.snippet.thumbnails.high.url
                    let title = videoData.snippet.localized.title
                    let creator = videoData.snippet.channelTitle
                    let videoSrc = videoData.player.embedHtml
                    let videoDesc = videoData.snippet.description
                    let viewsCount = videoData.statistics.viewCount
                    let likesCount = videoData.statistics.likeCount
                    let commentsCount = videoData.statistics.commentCount
                    let videoTags = videoData.snippet.tags
                    let date = videoData.snippet.publishedAt

                    createVideosDiv(imgSrc, title, creator)
                    createVideoFullInfoDiv(videoSrc, title, videoDesc, creator, viewsCount, likesCount, commentsCount, date, videoTags)
                }

                console.log('Response', response.result.items[1].snippet.publishedAt)
            },
            function (err) {
                console.error('Execute error', err)
            }
        )
}

gapi.load('client', function() {
    loadClient().then(execute)
})

let count = 0

function createVideosDiv(imgSrc, title, creator) {
    const videosLine = document.querySelector('.videosLine')

    const videoDiv = document.createElement('div')
    const videoImg = document.createElement('img')
    const videoTitle = document.createElement('h5')
    const videoCreator = document.createElement('h6')

    videoDiv.setAttribute('id', `videoDivNum${count++}`)

    videoImg.src = imgSrc
    videoTitle.textContent = title
    videoCreator.textContent = creator

    videosLine.appendChild(videoDiv)
    videoDiv.appendChild(videoImg)
    videoDiv.appendChild(videoTitle)
    videoDiv.appendChild(videoCreator)
}

//#endregion

//#region get country name

async function getCountryNameAsync() {
    try{
        const url = 'https://restcountries.com/v3.1/all'
        const fileCountryName = await fetch(url)
        const dataCountryName = await fileCountryName.json()

        return dataCountryName
    } catch(error) {
        console.error(error)
    }

    return []
}

const countryNameObj = await getCountryNameAsync()
const countrySelect = document.getElementById('country')

function getCountryName() {

    for (const country of countryNameObj) {
        let newCountry = document.createElement('option')

        newCountry.value = country.cca2
        newCountry.innerHTML = country.name.common

        if (countrySelect.value === 'US') {
            countrySelect.selected = 'selected'
        } 
        
        countrySelect.appendChild(newCountry)
    }
}

getCountryName()

countrySelect.addEventListener('change', () => execute(countrySelect.value))

//#endregion

//#region video full info

function createVideoFullInfoDiv(videoUrl, title, videoDesc, creator, views, likes, comments, date, tags) {
    const videoDivFullInfo = document.getElementById('videoDivFullInfo')

    const row = document.createElement('div')
    row.classList.add('row')
    row.style.margin = '50px 0'
    row.style.maxHeight = '400px'
    row.style.overflowY = 'scroll'

    const columnOne = document.createElement('div')
    const columnTwo = document.createElement('div')
    columnOne.classList.add('col-6')
    columnTwo.classList.add('col-6')

    const videoElement = document.createElement('div')

    const videoDescription = document.createElement('p')
    const videoTitle = document.createElement('h5')
    const videoCreator = document.createElement('h6')
    const viewsCount = document.createElement('span')
    const likesCount = document.createElement('span')
    const commentsCount = document.createElement('span')
    const uploadDate = document.createElement('span')
    const videoTags = document.createElement('span')

    videoElement.innerHTML = videoUrl

    videoTitle.textContent = `Title: ${title}`
    videoCreator.textContent = `Creator: ${creator}`
    videoDescription.textContent = `Description: ${videoDesc}`

    viewsCount.textContent = `View Count: ${views}`
    likesCount.textContent = `Like Count: ${likes}`
    commentsCount.textContent = `Comment Count: ${comments}`
    uploadDate.textContent = `Upload: ${date}`
    videoTags.textContent = `Tags: ${tags}`

    videoDivFullInfo.appendChild(row)

    row.appendChild(columnOne)
    row.appendChild(columnTwo)

    columnOne.appendChild(videoElement)

    columnTwo.appendChild(videoTitle)
    columnTwo.appendChild(videoDescription)
    columnTwo.appendChild(videoCreator)
    columnTwo.appendChild(viewsCount)
    columnTwo.appendChild(likesCount)
    columnTwo.appendChild(commentsCount)
    columnTwo.appendChild(uploadDate)
    columnTwo.appendChild(videoTags)
}

//#endregion