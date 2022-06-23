
function calcular() {
  // Encontrar elementos de HTML
  const el_cantidad = document.getElementById("cantidad");
  const el_texto = document.getElementById("texto");

  // Creación de variables
  const precio_juego = 200;
  let cantidad = el_cantidad.value;
  let descuento = 0;
  
  // Preguntar cantidad de juegos y aplicar descuento
  if(cantidad >= 7) {
    descuento = 400;
  }
  
  // Calcular precio total
  let total = (cantidad * precio_juego) - descuento;
  el_texto.innerHTML = "El total es: $" + total;
}

