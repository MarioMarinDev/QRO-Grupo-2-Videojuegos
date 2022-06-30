
// JSON
let datos = {
  nombre: "Jan Marco",
  apellido: "Marín Barradas",
  edad: 17,
  materias: ["español", "matemáticas", "física"],
  calificaciones: [9, 10, 8],
  grado: 1,
  grupo: "A",
  discapacidad: false,
  tutor: {
    nombre: "Miriam",
    edad: 29,
    apellido: "Marín"
  }
}

// Obtener edad
console.log(datos.tutor.apellido);




















/* 
  Hola mi nombre es [nombre], tengo [edad] años y soy de [lugar].

  numeros (1, 2, 3)
  textos (string)
  booleanos (true, false)
  arreglos [1, 2, 3, 4]
  objetos 
*/
function saludar(nombre, edad, lugar) {
  return "Hello mi nombre es " + nombre + ", tengo " + edad + " años y soy de " + lugar;
}

let saludos = [
  saludar("Mario", 25, "Veracruz"),
  saludar("Ana", 14, "Querétaro"),
  saludar("Alison", 12, "México"),
  saludar("Natalia", 15, "Querétaro")
];

// for(let i = 0; i < saludos.length; i++) {
//   console.log(saludos[i]);
// }














// const titulo_juego = document.querySelector("div.contenedor h2");
// const desc_juego = document.querySelector("div.contenedor p");
// const titulo_completo = document.getElementById("titulo-completo");
// titulo_completo.innerHTML = "Te hackie...";

// let titulo_abreviado = document.getElementById("titulo-abreviado");
// titulo_abreviado.innerHTML = "Uriel/wh";

// function pacman() {
//   let caja_pacman = document.getElementById("caja");
//   caja_pacman.src = "images/pacman.png";
//   titulo_juego.innerHTML = "Pacman";
//   desc_juego.innerHTML = "Este es el juego de Pacman que salió en 1980";
// }

// function halo() {
//   let caja_halo = document.getElementById("caja");
//   caja_halo.src = "images/halo.png";
//   titulo_juego.innerHTML = "Halo Infinite";
//   desc_juego.innerHTML = "Este es el juego de Halo más reciente";
// }

// function genshin() {
//   let caja_genshin = document.getElementById("caja");
//   caja_genshin.src = "images/genshin.jpg"
//   titulo_juego.innerHTML = "Genshin Impact";
//   desc_juego.innerHTML = "Genshin Impact es un juego gratis de PC y smartphone.";
// }
