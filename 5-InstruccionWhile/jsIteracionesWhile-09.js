/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo =0;
	var numeroMinimo =0;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=0;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (banderaDelPrimero == 0) {
			numeroMinimo = numeroIngresado
			numeroMaximo = numeroIngresado
			banderaDelPrimero = 1;
		}
		if (numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;
		}else {
			numeroMaximo = numeroIngresado;
		}
		

		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN