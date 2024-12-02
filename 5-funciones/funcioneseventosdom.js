//Crear una funcion
function Saludar() {
  //Obtenemos el elemento que queremos modificar del HTML
  document.getElementById("parrafo").textContent = "Hola Mundo"
}

function Despedir() {
  document.getElementById("parrafo").textContent = "Adios"
}

function CambiarColor() {
  //Obtenemos el elemento del que queremos cambiar el color por el id
  document.getElementById("parrafo").style.color = "red"
}

function ocultar() {
  //Obtenemos el elemento con id parrafo y cambiamos display a none para ocultarlo
  document.getElementById("parrafo").style.display = "none"
}

function mostrar() {
  //Obtenemos el elemento displau parrafo y cambiamos display a block para mostrarlo
  document.getElementById("parrafo").style.display = "block"
}