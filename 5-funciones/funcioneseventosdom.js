//Crear una funcion
function saludar() {
  //Obtenemos el elemento que queremos modificar del HTML
  document.getElementById("parrafo").textContent = "Hola Mundo"
}

function despedir() {
  document.getElementById("parrafo").textContent = "Adios"
}

function cambiarColor() {
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