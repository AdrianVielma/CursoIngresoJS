/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	while (respuesta == "si") {

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador += numeroIngresado;
		contador++;
		
		respuesta = prompt("¿quiere seguir? si/no");
	}



	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contador;

}//FIN DE LA FUNCIÓN