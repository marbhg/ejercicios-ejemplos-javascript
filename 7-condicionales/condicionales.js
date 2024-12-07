function comprobarEdad(){
  //Guardamos la edad 
 let edad = document.getElementById("edad").valueAsNumber;
 let mensaje = "";
 
 //Segun edad, damos un valor u otro al mensaje 

 if(edad > 18){
  mensaje = "El usuario tiene mas de 18 años";
 }
 else if(edad === 18) {
mensaje = "El usuario tiene 18 años";
 }
else {
  mensaje = "El usuario tiene menos de 18 años";
}
//mostramos el mensaje 
document.getElementById("mensajeedad").textContent = mensaje;

 }
function adivinar(){
  //Creamos una constante con el texto ganador
  let colorelegido = document.getElementById("colorpremio").value;
  ///Guardamos el valor selecionado por la variable del color elegido por el usuario
  let colorganador = "lila";
  let mensaje ="";
//Comprobamos si el color elegido es igual al ganador o no. Pasamos a mayusculas todos los textos para evitar errores en las comparaciones si tienen mayusculas o minuscukas diferentes, 
  if("colorelegido.toUpperCase() === colorganador.toUpperCase()"){
    mensaje = "Ha ganado";
  } else { 
    mensaje = "Ha perdido";
 }
document.getElementById("mensajepremio").textContent = mensaje; 
}

