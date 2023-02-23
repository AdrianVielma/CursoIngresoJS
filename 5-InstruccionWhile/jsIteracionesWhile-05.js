/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = document.getElementById("txtIdSexo").value
	sexoIngresado = prompt("ingrese f ó m .");

	while (!(sexoIngresado == "f" || sexoIngresado == "m" )) {
		alert("el sexo ingresado es incorrecto")
		sexoIngresado = prompt("ingrese f ó m .");
	}
	if (sexoIngresado == "f") {
		alert("El sexo ingresado es femenino")
	}else if (sexoIngresado == "m")
	alert("El sexo ingresado es Masculino")


	
}//FIN DE LA FUNCIÓN