const infoContainer = document.getElementById('info')
const urlArrayInfo = window.location.href.split('?')[1].split('&')
let newP = document.createElement('p');
urlArrayInfo.forEach(param => {
    param = param.replace('%40','@');
    param = param.replace('-',' ');
    let newP = document.createElement('p');
    newP.textContent = param + '\r\n'
    infoContainer.appendChild(newP)
})
