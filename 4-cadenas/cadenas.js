
//Declarar variables con candenas
let saludo = "Hola Mundo";
let saludo2 = "Hello Word";

//Concatenar cadenas
let SaludoCompleto = saludo + " " + saludo2;

//Mostrar cadenas
document.write("SaludoCompleto " + SaludoCompleto + "</br>");

//Mostrar la longitud de una cadena
document.write("Longitud de la cadena: " + SaludoCompleto.length + "<br>");

//Mostrar la cadena en mayusculas
document.write("Saludo en mayusculas: " + SaludoCompleto.toUpperCase() + "<br>")

//Mostrar la cadena en minuscula
document.write("Saludo en minuscula: " + SaludoCompleto.toLowerCase() + "<br>")

//Reemplazar texto de una cadena
let despedida = SaludoCompleto.replace("Hola", "Adios");
document.write("Saludo con palabra reemplazada: " + despedida);

//Includes muestra true si la cadena contiene la palabra indicada o false sino. Distingue mayusculas y minusculas.
document.write("Saludo Completo tiene la palabra Mundo? " + SaludoCompleto.includes("Mundo") + "<br>");
document.write("Saludo Completo tiene la palabra MUNDO? " + SaludoCompleto.includes("MUNDO") + "<br>")
document.write("Saludo Completo tiene la palabra marta? " + SaludoCompleto.includes("marta") + "<br>");