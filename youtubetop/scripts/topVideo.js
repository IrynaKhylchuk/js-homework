//#region api

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
                    let date = videoData.snippet.publishedAt
                    let videoTags = videoData.snippet.tags

                    createVideosDiv(imgSrc, title, creator)
                    createVideoFullInfoDiv(videoSrc, title, videoDesc, creator, viewsCount, likesCount, commentsCount, date, videoTags)
                }

                console.log('Response', response)
            },
            function (err) {
                console.error('Execute error', err)
                showEmptyResult()
            }
        )
}

gapi.load('client', function() {
    loadClient().then(execute)
})

//#endregion

//#region videos line

const videosLine = document.querySelector('.videosLine')

function createVideosDiv(imgSrc, title, creator) {
    const videoDiv = document.createElement('div')
    const videoImg = document.createElement('img')
    const videoTitle = document.createElement('h5')
    const videoCreator = document.createElement('h6')

    videoImg.src = imgSrc
    videoTitle.textContent = title
    videoCreator.textContent = creator

    videosLine.appendChild(videoDiv)
    videoDiv.appendChild(videoImg)
    videoDiv.appendChild(videoTitle)
    videoDiv.appendChild(videoCreator)
}

//#endregion

//#region get country

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
const undefinedCountry = document.getElementById('undefinedCountry')
const videoDivFullInfo = document.getElementById('videoDivFullInfo')

function getCountryName() {
    for (const country of countryNameObj) {
        let newCountry = document.createElement('option')

        newCountry.value = country.cca2
        newCountry.innerHTML = country.name.common

        if (newCountry.value === 'US') {
            newCountry.selected = 'selected'
        }
        
        countrySelect.appendChild(newCountry)
    }
}

getCountryName()

function updateContent() {
    videosLine.innerHTML = ''
    videoDivFullInfo.innerHTML = ''

    execute(countrySelect.value)
}

countrySelect.addEventListener('change', updateContent)
countrySelect.addEventListener('keypress', updateContent)

function showEmptyResult() {
    undefinedCountry.style.display = 'block'
    undefinedCountry.style.textAlign = 'center'
}

//#endregion

//#region video full info

function createVideoFullInfoDiv(videoUrl, title, videoDesc, creator, views, likes, comments, date, tags) {
    const row = document.createElement('div')
    row.classList.add('row', 'videoInfoDiv')

    const columnOne = document.createElement('div')
    const columnTwo = document.createElement('div')
    columnOne.classList.add('col-6', 'videoContainer')
    columnTwo.classList.add('col-6')

    const videoElement = document.createElement('div')
    videoElement.classList.add('responsiveIframe')

    const videoTitle = document.createElement('h4')
    const videoCreator = document.createElement('h6')
    const likesCount = document.createElement('span')
    const viewsCount = document.createElement('span')
    const commentsCount = document.createElement('span')
    const uploadDate = document.createElement('span')
    const videoDescription = document.createElement('p')
    const videoTags = document.createElement('span')

    videoElement.innerHTML = videoUrl

    videoTitle.innerHTML = `${title}`
    videoCreator.innerHTML = `${creator}`
    likesCount.innerHTML = `<i class="fa-solid fa-heart"></i> ${likes} <br>`
    viewsCount.innerHTML = `<i class="fa-solid fa-eye"></i> ${views} <br>`
    commentsCount.innerHTML = `<i class="fa-solid fa-comment"></i> ${comments} <br>`
    uploadDate.innerHTML = `<i class="fa-solid fa-upload"></i> ${date}`
    videoDescription.innerHTML = `${videoDesc}`
    
    
    if (tags === undefined) {
        videoTags.innerHTML = ''
    } else {
        videoTags.innerHTML = `<i class="fa-solid fa-hashtag"></i> ${tags}`        
    }

    videoDivFullInfo.appendChild(row)

    row.appendChild(columnOne)
    row.appendChild(columnTwo)

    columnOne.appendChild(videoElement)

    columnTwo.appendChild(videoTitle)
    columnTwo.appendChild(videoCreator)
    columnTwo.appendChild(likesCount)
    columnTwo.appendChild(viewsCount)
    columnTwo.appendChild(commentsCount)
    columnTwo.appendChild(uploadDate)
    columnTwo.appendChild(videoDescription)
    columnTwo.appendChild(videoTags)
}

//#endregion