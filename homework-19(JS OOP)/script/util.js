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
            input[0].value = obj[key]
        }
    })
}