function suma(){
    numero1= prompt("Número 1");
    numero2= prompt("Número 2");
    document.write (parseInt(numero1) + parseInt(numero2));
}
function resta(){
    numero1= prompt("Número 1");
    numero2= prompt("Número 2");
    document.write (parseInt(numero1) - parseInt(numero2));
}
function multiplicación(){
    numero1= prompt("Número 1");
    numero2= prompt("Número 2");
    document.write (parseInt(numero1) * parseInt(numero2));
}
function división(){
    numero1= prompt("Número 1");
    numero2= prompt("Número 2");
    document.write (parseInt(numero1) / parseInt(numero2));
}
var decisión = parseInt(prompt ("¿Qué deseas hacer? 1=sumar 2=restar 3=multiplicar 4=dividir"));

if (decisión == 1) {
  suma();
}
if (decisión == 2) {
  resta()
}
if (decisión == 3) {
  multiplicación()
}
if (decisión == 4) {
  división()
}
