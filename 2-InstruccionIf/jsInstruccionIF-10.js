/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
function mostrar()
{
	var mensaje;
	
	mensaje = Math.floor(Math.random() * 11 );

	if (mensaje > 8) {
		alert("excelente")
	}
	else if (mensaje < 4 ){
		alert("vamos la proxima se puede ");
	} else{
		alert("aprobo")
	}
	

}//FIN DE LA FUNCIÓN