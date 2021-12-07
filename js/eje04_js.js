var miVarGlob = "Variable Global";

function alerta() {
    var contador = 10;
    var texto = "texto con \'comillas\'";
    alert(texto);
}
    
function hacerclic() {
    document.getElementsByTagName('p')[0].onclick= alerta;
    document.getElementById('dos').onclick= alerta;
    console.log(miVarGlob);
}

window.onload = hacerclic;