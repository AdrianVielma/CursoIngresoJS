function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;
	
	
	switch(mesDelAño) {
		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;
		case "Marzo": 
		case "Mayo": 
		case "Julio": 
		case "Agosto": 
		case "Octubre": 
		case "Diciembre":
			mensaje = "Este mes tiene 31 dias" 
			break;

		default:
			mensaje = "este mes tiene 30 ";//abril , junio , septiembre y noviembre.
			break;
	}
	
	

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN