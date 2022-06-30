
/*
  Obtener el tamaño (cantidad) de elementos en un arreglo:    variable_arreglo.length;
  Agregar al inicio de un arreglo:                            variable_arreglo.unshift(nuevo_valor);
  Agregar al final de un arreglo:                             variable_arreglo.push(nuevo_valor);
  Eliminar el primer elemento de un arreglo (0):              variable_arreglo.shift();
  Elimnar el último elemento de un arreglo:                   variable_arreglo.pop();

  for(estado_inicial = 0; condición; estado_siguente += 1) {
    el código que se estará repitiendo
  }
*/

let juegos = ["Call of Duty", "Halo", "Gears of War", "Free Fire", "Minecraft", "Geometry Dash", "Clash Royale", "PK XD", "Brawl Stars", "Among Us", "Fortnite", "Mortal Kombat", "Red Dead Redemption", "Genshin Impact", "Pacman", "Gran Theft Auto", "FIFA"];
juegos.push("Persona");
juegos.unshift("Borderlands");

let contenido = document.getElementById("contenido-principal");
contenido.innerHTML = "<ul>";

for(let i = 0; i < juegos.length; i+=1) {
// for(let i = juegos.length - 1; i >= 0; i-=1) {
  contenido.innerHTML += "<li style='text-decoration: underline;'>" + juegos[i] + "</li>";
}

contenido.innerHTML += "</ul>";

