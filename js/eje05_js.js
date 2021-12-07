var f = () => {return 'Función flecha sin parámetros';}
var f1 = (x) => x*x;
var f2 = (a,b,c) => a + b - c;
console.log(f());
console.log(f1(3));
console.log(f2(6,9,2));

var valor = prompt('Proporcione el valor: ','');
console.log(valor);

var realiza = confirm('Desea realizar la transacción');
console.log(realiza);

if (realiza){
    alert('Transacción realizada');
}else{
    alert('Transacción no realizada');
}