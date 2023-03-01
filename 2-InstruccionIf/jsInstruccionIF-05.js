/* Al ingresar una edad solo debemos informar si la persona
 NO es adolescente. */

function mostrar()
{
	//declaramos variables
	var edad;

	//asignamos valor
	edad = document.getElementById("txtIdEdad").value;

	//parseo(convierto de texto a numero)
	edad = parseInt(edad);

	if (edad <12 || edad >18)
	{
		alert("usted es no es adolescente ");
	}
}//FIN DE LA FUNCIÓN