/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado = 0;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	
	while (!(numeroIngresado > 0 && numeroIngresado < 10)) {
		alert("numero ingresado no valido")

		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	
		
	}
	alert("numero ingresado valido")



}//FIN DE LA FUNCIÓN