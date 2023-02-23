function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño) {
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 dias";
			break;
		default:
			mensaje = "este mes tiene 30 o mas dias";
			break;
	}
	
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN