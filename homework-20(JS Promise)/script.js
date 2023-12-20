const documents = {
    hasForeignPassport: true, 
    hasScannedCopies: true,
    hasUkrainianPassport: true,
    hasMarriageOrDivorceCertificate: true,
    hasChildBirthCertificates: true,
    hasBankAccountStatement: false
}

const verificationOfVisaDocuments = 
GetPromise(documents.hasForeignPassport, 'foreign passport', documents)
.then(documents => GetPromise(documents.hasScannedCopies, 'scanned copies of all pages of the foreign passport', documents))
.then(documents => GetPromise(documents.hasUkrainianPassport, 'Ukrainian passport with all pages filled out', documents))
.then(documents => GetPromise(documents.hasMarriageOrDivorceCertificate, 'marriage or divorce certificate', documents))
.then(documents => GetPromise(documents.hasChildBirthCertificates, 'child\'s birth certificate', documents))
.then(documents => GetPromise(documents.hasBankAccountStatement, 'bank account statement for the past six months', documents))
.then(() => console.log('Congrats! Here\'s your Canada visa.'))
.catch(error => console.error(`${error} Your request for Canada visa was declined.`))

function GetPromise(isDocumentAvailable, documentName, allDocuments) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDocumentAvailable) {
                console.log(`Your ${documentName} is valid.`)
                resolve(allDocuments)
            } else {
                reject(`Your ${documentName} is not available.`)
            }
        }, 1000)
    })
}