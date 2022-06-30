
/*
  Programa para verificar si una variable
  es positiva, negativa o neutra...
*/

let numero = prompt("Selecciona un número:");
let resultado = "";

if(numero == 0) {
  resultado = "Neutro";
} else if(numero > 0) {
  resultado = "Positivo";
} else {
  resultado = "Negativo";
}

console.log("El número " + numero + " es: " + resultado);

