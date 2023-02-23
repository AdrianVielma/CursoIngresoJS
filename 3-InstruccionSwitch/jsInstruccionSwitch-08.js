function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	var mensaje
	
	switch (destinoIngresado) {
		case "Ushuaia":
		case "Bariloche":
			mensaje = "Frio";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "Calor";
			break;					
	}
	
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN