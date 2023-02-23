function mostrar()
{
	//declaramos variables
	var edad;
	
	//asignamos valor
	edad = document.getElementById("txtIdEdad").value;

	//parseo
	edad = parseInt(edad);

	if(edad > 17) 
	{
		alert("Usted es mayor de edad");
	}


}//FIN DE LA FUNCIÓN