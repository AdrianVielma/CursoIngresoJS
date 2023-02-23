/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var bandera;
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	bandera=0;
	while (respuesta == "si") {

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado < 0) {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			bandera=1;
		}else{
			
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		respuesta = prompt("¿quiere seguir? si/no");
	}
	if (bandera == 0) {
		multiplicacionNegativos = 0;

	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN