function alerta() {
    alert('hizo clic!');
}
    
function hacerclic() {
    document.getElementsByTagName('p')[0].onclick= alerta;
    document.getElementById('dos').onclick= alerta;
}

window.onload = hacerclic;