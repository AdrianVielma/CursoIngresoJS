function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	var mensaje
	
	switch (destinoIngresado) {
		case "Ushuaia":
			mensaje = "sur";
			break;
		case "Bariloche":
			mensaje = "oeste";
			break;
		case "Mar del plata":
			mensaje = "este";
			break;
		case "Cataratas":
			mensaje = "Norte";
			break;					
	}
	
	
	
	
	
	
	
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN