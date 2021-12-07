function sumar(x,y){
    return x + y;
}

var a = sumar(3,6);
alert(a);

var operacion = function (m,n){
    return m - n;
}

b = operacion(5,9);
alert(b);

function init(){
    document.getElementsByTagName('button')[0].onclick = sumar;
}

function myFun(fun, arr) {
    let result = []; // Crea un arreglo
    let i; // Declara una variable
    for(i = 0; i  < arr.length; i++)
        result[i] = fun(arr[i]);
    return result;
}
const cubo = function(x) {
    return x * x * x;
};
let array= [2, 4, 6, 8, 10];
let valores= myFun(cubo, array)
console.log('valores:', valores);

// Las siguientes variables se definen en el ámbito global
var num1= 25, num2= 4, name= 'Jorge'; // Esta función está definida en el ámbito global
function multiplicar() {
    return num1 * num2;
}

// Un ejemplo de función anidada
function adicionar() {
    var num1 = 2, num2 = 3;
    function add() {
        return this.name + ' anotó ' + (num1 + num2);
    }
    return add();
}

console.log(adicionar());
console.log(multiplicar());