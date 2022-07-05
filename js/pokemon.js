
let pokemon_actual = 1;
const pokemon_minimo = 1;
const pokemon_maximo = 898;
const url = "https://pokeapi.co/api/v2/pokemon/";
const el_nombre = document.getElementById("nombre");
const el_imagen = document.getElementById("imagen");
const el_numero = document.getElementById("numero");

function obtener_pokemon(numero) {
  fetch(url + numero).then(function(respuesta) {
    return respuesta.json();
  }).then(function(datos) {
    // Obtener número
    let numero = datos.id;
    el_numero.innerHTML = "#" + numero;
    // Obtener nombre
    let nombre = datos.name;
    el_nombre.innerHTML = nombre;
    // Obtener imagen
    let imagen = datos.sprites.front_default;
    el_imagen.src = imagen;
  }).catch(function(erorr) {
    el_numero.innerHTML = "#0";
    el_nombre.innerHTML = "Error";
    el_imagen.src = "";
  });
}

obtener_pokemon(pokemon_actual);

const el_siguiente = document.getElementById("siguiente");
const el_anterior = document.getElementById("anterior");

el_siguiente.addEventListener("click", function() {
  pokemon_actual += 1;
  if(pokemon_actual > pokemon_maximo) {
    pokemon_actual = 1;
  }
  obtener_pokemon(pokemon_actual);
});

el_anterior.addEventListener("click", function() {
  pokemon_actual -= 1;
  if(pokemon_actual <= 0) {
    pokemon_actual = pokemon_maximo;
  }
  obtener_pokemon(pokemon_actual);
});

// Buscar pokemon
const el_busqueda = document.querySelector("#buscar input");
const el_buscar = document.querySelector("#buscar button");
el_buscar.addEventListener("click", function() {
  let busqueda_numero = el_busqueda.value;
  pokemon_actual = parseInt(busqueda_numero);
  obtener_pokemon(pokemon_actual);
});