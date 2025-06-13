// Esperamos que el DOM cargue antes de usar elementos
window.onload = function () {
  const boton = document.getElementById("boton-desplegar");
  const contenido = document.getElementById("contenido-desplegable");

  boton.addEventListener("click", function () {
    if (contenido.style.display === "none") {
      contenido.style.display = "block";
    } else {
      contenido.style.display = "none";
    }
  });
};


