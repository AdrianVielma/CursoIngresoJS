function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;
	var mensaje
	
	switch(mesDelAño) {
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio 🥶";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya paso el invierno ";
			break;
		default:
			mensaje = "Falta poco para el invierno ";
			break;


	}
	
	
	alert(mensaje);




}//FIN DE LA FUNCIÓN