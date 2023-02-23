function mostrar() {
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0;
	acumulador = 0;

	while (contador < 5) {

		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)

		acumulador += numeroIngresado;
		contador++;

	}
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio
}//FIN DE LA FUNCIÓN