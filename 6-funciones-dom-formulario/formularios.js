
function mostrarDatosFormulario() {
  //Obtenemos los valores del formulario y los guardamos en variables
  
  //Obtener valor de input numerico
  let edad = document.getElementById("edad").valueAsNumber;

  //Obtener los valores del select 
  let color = document.getElementById("color").value;

//Mostrar mensajes con los datos
  document.getElementById("datosformulario").textContent = "Datos del formulario, edad" + edad + "color";

//Ocultar el formulario despues de enviar 
document.getElementById("formulariodatos").style.display = "none";
}

function cambiarColor() {
  let color = document.getElementById("color").value;
  document.getElementById("parrado").style.color = color;

}