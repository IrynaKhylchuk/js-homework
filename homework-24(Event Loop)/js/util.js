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