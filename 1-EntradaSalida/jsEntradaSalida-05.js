/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombreIngresado;			
	var edadIngresada;
	var mensaje;

 	nombreIngresado	= document.getElementById("txtIdNombre").value;
 	edadIngresada = document.getElementById("txtIdEdad").value;

 	mensaje = "Su nombre es ";
 	mensaje = mensaje + nombreIngresado;
 	mensaje = mensaje + " y su edad es ";
 	mensaje = mensaje + edadIngresada
 	mensaje = mensaje + " años";

	alert(mensaje);
}

