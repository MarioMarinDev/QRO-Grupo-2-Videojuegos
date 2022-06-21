
const titulo_juego = document.querySelector("div.contenedor h2");
const desc_juego = document.querySelector("div.contenedor p");
const titulo_completo = document.getElementById("titulo-completo");
titulo_completo.innerHTML = "Te hackie...";

let titulo_abreviado = document.getElementById("titulo-abreviado");
titulo_abreviado.innerHTML = "Uriel/wh";

function pacman() {
  let caja_pacman = document.getElementById("caja");
  caja_pacman.src = "images/pacman.png";
  titulo_juego.innerHTML = "Pacman";
  desc_juego.innerHTML = "Este es el juego de Pacman que salió en 1980";
}

function halo() {
  let caja_halo = document.getElementById("caja");
  caja_halo.src = "images/halo.png";
  titulo_juego.innerHTML = "Halo Infinite";
  desc_juego.innerHTML = "Este es el juego de Halo más reciente";
}

function genshin() {
  let caja_genshin = document.getElementById("caja");
  caja_genshin.src = "images/genshin.jpg"
  titulo_juego.innerHTML = "Genshin Impact";
  desc_juego.innerHTML = "Genshin Impact es un juego gratis de PC y smartphone.";
}
