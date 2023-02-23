/* Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive) .*/

function mostrar()
{
	//declaramos variables
	var edad;

	//asignamos valor
	edad = document.getElementById("txtIdEdad").value;

	//parseo
	edad = parseInt(edad);

	if (edad >12 && edad <18)
	{
		alert("usted es adolescente ");
	}
	


}//FIN DE LA FUNCIÓN