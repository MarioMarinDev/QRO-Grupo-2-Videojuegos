
const pokemon_minimo = 1;
const pokemon_maximo = 898;
const url = "https://pokeapi.co/api/v2/pokemon/";
const contenedores = document.querySelectorAll("#lista-pokemon div");
let rango = contenedores.length;
let pokemon_actual = 1;
var datos_pkmn = null;

function actualizar_informacion() {
  for(let i = 0; i < rango; i+=1) {
    // Obtener los elementos a llenar
    let el_num = contenedores[i].querySelector("h5");
    let el_nombre = contenedores[i].querySelector("h4");
    let el_img = contenedores[i].querySelector("img");
    // Obtener el pokemon actual
    obtener_pokemon(pokemon_actual + i).then(function(datos) {
      el_num.innerHTML = "#" + datos.id;
      el_nombre.innerHTML = datos.name;
      el_img.src = datos.sprites.front_default;
    });
  }
}

function obtener_pokemon(numero) {
  return fetch(url + numero).then(function(respuesta) {
    return respuesta.json();
  }).then(function(datos) {
    return datos
  }).catch(function(error) {
    console.log(error);
  });
}

actualizar_informacion();

const el_siguiente = document.getElementById("siguiente");
const el_anterior = document.getElementById("anterior");

el_siguiente.addEventListener("click", function() {
  pokemon_actual += 3;
  if(pokemon_actual > pokemon_maximo - rango + 1) {
    pokemon_actual = 1;
  }
  actualizar_informacion();
});

el_anterior.addEventListener("click", function() {
  pokemon_actual -= 3;
  if(pokemon_actual <= 0) {
    pokemon_actual = pokemon_maximo - rango + 1;
  }
  actualizar_informacion();
});
