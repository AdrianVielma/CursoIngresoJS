function mostrar()
{
	//tomo la hora
	var horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);
	var mensaje
	
	switch(horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana."
			break;


	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN