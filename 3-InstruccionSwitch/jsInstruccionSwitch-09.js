function mostrar()
{
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	var porcentaje = 1
	var viajeMonto = 15000;
	var precioTotal;
	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado) {
			case "Bariloche":
				porcentaje = 1.2;
				break;
			case "Cataratas":
			case "Cordoba":
				porcentaje = 0.9;
				break;
			case "Mar del plata":
				porcentaje = 0.8;
				break;
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 0.8;
					break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = 1.1;
					break;
				case "Mar del plata":
					porcentaje = 1.2;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 1.1;
					break;
				case "Cordoba":
					porcentaje = 1;	
				
			}	
			break;
		}		
	precioTotal = viajeMonto * porcentaje;
		
	alert(precioTotal);

}//FIN DE LA FUNCIÓN