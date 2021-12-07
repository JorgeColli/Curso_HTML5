window.onload = function () {
    var salida = document.getElementById('info');

    // Numero de enlaces de la pagina
    var enlacesTot = document.getElementsByTagName('a');
    NumEnlacesTot = enlacesTot.length;
    console.log(NumEnlacesTot);

    // Direccion del penultimo enlace
    var penultimo = NumEnlacesTot - 2;
    var direc = document.getElementsByTagName('a')[penultimo].getAttribute('href');
    console.log(direc);

    // Numero de enlaces que apuntan a http://prueba
    var NumEnlaces = 0;
    for (var i=0; i<NumEnlacesTot; i++){
        if (document.getElementsByTagName('a')[i].getAttribute('href') == 'http://prueba'){
            NumEnlaces++;
        }
    }
    console.log(NumEnlaces);

    // Numero de enlaces del tercer parrafo
    var parrafo3 = document.getElementsByTagName('p')[2];
    var enlaces3 = parrafo3.getElementsByTagName('a');
    var contelances3 = enlaces3.length;
    console.log(contelances3);

    salida.innerHTML = 'El número de enlaces es: ' + NumEnlacesTot;
    salida.innerHTML = salida.innerHTML + '<br>' + 'Url a la que enlaza el penultimo enlace es: ' + direc;
    salida.innerHTML = salida.innerHTML + '<br>' + 'Numero de enlaces que apuntan a http://prueba: ' + NumEnlaces;
    salida.innerHTML = salida.innerHTML + '<br>' + 'Numero de enlaces del tercer parrafo: ' + contelances3;
};