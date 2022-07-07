
const uri = "https://raw.githubusercontent.com/MarioMarinDev/QRO-Grupo-2-API/master/";
let juego_seleccionado = null;

// Encontrar elementos del HTML
const el_lista = document.getElementById("lista-juegos");
const el_caja = document.getElementById("caja");
const el_titulo = document.querySelector("div#juego-info h2");
const el_genero = document.querySelector("div#juego-info h3");
const el_desc = document.querySelector("div#juego-info p");

fetch(uri + "datos.json").then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  for(let i = 0; i < datos.length; i+=1) {
    // Crear nuevo botón y agregarlo a la lista
    let nuevo_boton = document.createElement("button");
    nuevo_boton.innerHTML = datos[i].nombre;
    el_lista.appendChild(nuevo_boton);
    // Agregar el evento de clic al botón
    nuevo_boton.addEventListener("click", function() {
      // Cambiar caja del juego, titulo y genero
      el_caja.src = uri + datos[i].imagen;
      el_titulo.innerHTML = datos[i].nombre;
      el_genero.innerHTML = datos[i].genero;
      el_desc.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dignissimos quasi corporis magni animi iure molestias dolor porro, cupiditate praesentium, sunt eveniet placeat nesciunt. Nisi earum laboriosam praesentium perspiciatis perferendis.";
      // Agregar juegos de la saga
      if(datos[i].juegos != undefined) {
        el_desc.innerHTML += "\n<h4>Juegos en la serie:</h4><ul>";
        for(let j = 0; j < datos[i].juegos.length; j+=1) {
          el_desc.innerHTML += "<li>" + datos[i].juegos[j] + "</li>";
        }
        el_desc.innerHTML += "</ul>"
      }
      // Quitar clase del juego anterior
      if(juego_seleccionado != null) {
        juego_seleccionado.classList.remove("seleccionado");
      }
      // Agregar clase al juego seleccionado
      juego_seleccionado = nuevo_boton;
      nuevo_boton.classList.add("seleccionado");
    });
    // Darle clic automáticamente al primer botón
    if(i == 0) {
      nuevo_boton.click();
    }
  }
}).catch(function(error) {
  console.log(error);
});