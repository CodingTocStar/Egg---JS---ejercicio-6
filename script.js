/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. 
El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, 
‘R’ o ‘r’ para la resta, 
‘M’ o ‘m’ para la multiplicación y 
‘D’ o ‘d’ para la división. */

var num1 = parseInt(prompt("Ingrese el numero 1"));
var num2 = parseInt(prompt("Ingrese el numero 2"));

var opcion = prompt(`Ingrese la operacion que quiere realizar
                    S --> suma
                    R --> resta
                    M --> multiplicacion
                    D --> division`);

var opcionMayus = opcion.toUpperCase();

switch (opcionMayus) {
  case "S":
    alert(`El resultado de la suma es: ${num1 + num2}`);
    break;
  case "R":
    alert(`El resultado de la resta es : ${num1 - num2}`);
    break;
  case "M":
    alert(`El resultado de la multiplicacion es : ${num1 * num2}`);
    break;
  case "D":
    alert(`el resultado de la division es : ${num1 / num2}`);
    break;
}
