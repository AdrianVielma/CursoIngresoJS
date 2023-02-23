function mostrar()
{
	//tomo el mes
	var mesDelAño 
	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño) {
		case "Enero":
			mensaje = "que comiencies bien el año"
			break;
		case "Marzo":
			mensaje = "a clases!!!"
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!"
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!"		
	}
	
	
	alert(mensaje);



}//FIN DE LA FUNCIÓN