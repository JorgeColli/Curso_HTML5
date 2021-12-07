function agregarElemento() {
    var elemento = document.createElement('li');
    var texto = document.createTextNode('Opera');
    elemento.appendChild(texto);

    var list = document.getElementById('lista');
    list.appendChild(elemento);

    etiqueta = '<li>Safari</li>';

    list.innerHTML = list.innerHTML + etiqueta;
}