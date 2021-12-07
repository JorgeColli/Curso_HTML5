var ingredientes = new Array();
ingredientes[0] = 'azucar';
ingredientes[1] = 'huevo';
ingredientes[2] = 'canela';
ingredientes[3] = '';
ingredientes[4] = true;
ingredientes[8] = 'agua';
console.log(ingredientes[1]);
console.log(ingredientes);
console.log('Longitud del arreglo: ', ingredientes.length);

var ingredientes2 = new Array('tomate','cebolla','ajo');

for (let i=0; i<ingredientes2.length; i++){
    console.log(ingredientes2[i]);
}

for (let j of ingredientes2){
    console.log(j);
}

var ingredientes3 = new Array('elemento 1','elemento 2','elemento 3');
var ingredientes4 = new Array('elemento 1.1', 'elemento 2.1');
var todos = ingredientes3.concat(ingredientes4);
console.log(todos);

var index = todos.indexOf('elemento 3');
console.log(index);

var index2 = todos.indexOf('frijol');
console.log(index2);

var cadena = todos.join();
console.log(cadena);

var ultimo = ingredientes.pop();  //elimina el último
console.log(ultimo);

var long = ingredientes.push('sal');   //agrega al último y devuelve la longitus
console.log(long);

var primero = ingredientes.shift();   //elimina el primer elemento
console.log(primero);
console.log(ingredientes.length);
console.log(ingredientes);

var pedazo = ingredientes.slice(1,3);
console.log(pedazo);

var cadena = ingredientes2.toString();
console.log(cadena);

var nuelong = ingredientes2.unshift('pimienta');
console.log(nuelong);
console.log(ingredientes2.length);
console.log(ingredientes2);