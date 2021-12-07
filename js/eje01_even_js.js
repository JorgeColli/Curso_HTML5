
function resaltar() {
    var idDiv = this.id;
    var varId = document.getElementById(idDiv);
    switch(varId.style.borderColor) {
    case 'silver':
    case 'silver silver silver silver':
    case '#c0c0c0':
        varId.style.borderColor = 'black';
        break;
    case 'black':
    case 'black black black black':
    case '#000000':
        varId.style.borderColor = 'silver';
        break;
    case 'red':
    case 'red red red red':
    case '#ff0000':
        varId.style.borderColor = 'silver';
        break;
    }
}

window.onload = function() {
    var vDiv = document.getElementById('contenido');
    vDiv.onmouseover = resaltar;
    vDiv.onmouseout = resaltar;
};