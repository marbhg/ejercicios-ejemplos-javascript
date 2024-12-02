function comprobarEdad(){
  //Guardamos la edad 
 let edad = document.getElementById("edad").valueAsNumber;
 let mensaje = "";
 
 //Segun edad, damos un valor u otro al mensaje 

 if(edad > 18){
  mensaje = "El usuario tiene mas de 18 años";
 }
 else if(edad ===18) {
mensaje = "El usuario tiene 18 años";

 }
else {
  mensaje = "El usuario tiene menos de 18 años";
}
//mostramos el mensaje 
document.getElementById("mensajeedad").textContent = mensaje;

 }
