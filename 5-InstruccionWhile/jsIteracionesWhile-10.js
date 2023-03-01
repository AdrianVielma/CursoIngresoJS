/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos
8-Promedios de negativos..
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var negativos = 0;
	var positivos = 0;
	var contadorNegativo = 0;
	var contadorPositivo = 0;
	var contadorCero = 0;
	var contadorPar = 0;
	var promedioNegativo;
	var promedioPositivo;
	var diferencia;
	respuesta = true;

	while (respuesta == true) {
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < 0) {
			negativos += numeroIngresado;
			contadorNegativo++;
		} else if (numeroIngresado > 0) {
			positivos += numeroIngresado;
			contadorPositivo++;
		} else {
			contadorCero++;
		}
		if (numeroIngresado % 2 === 0) {
			contadorPar++;
		}

		respuesta = confirm("desea continuar?");

	}//fin del while

	diferencia = positivos - negativos
	promedioNegativo = negativos / contadorNegativo;
	promedioPositivo = positivos / contadorPositivo;

	document.write("la suma de negativos es:" + negativos + "<br>" +
		"la suma de positivos es:" + positivos + "<br>" +
		"la cantidad de negativos es:" + contadorNegativo + "<br>" +
		"la cantidad de positivos es:" + contadorPositivo + "<br>" +
		"la cantidad de ceros es:" + contadorCero + "<br>" +
		"la cantidad de numeros pares es:" + contadorPar + "<br>" +
		"el promedio de negativos es:" + promedioNegativo + "<br>" +
		"el promedio de positivos es:" + promedioPositivo + "<br>" +
		"la diferencia entre postivos y negativos es:" + diferencia + "<br>");

}//FIN DE LA FUNCIÓN