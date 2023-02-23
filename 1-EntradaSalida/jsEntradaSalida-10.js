/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;
	var aumento;


	importeIngresado = document.getElementById("txtIdImporte").value;

	//parseo
	importeIngresado = parseInt(importeIngresado);

	aumento = importeIngresado * 0.25;

	resultado = importeIngresado - aumento;
	
	//salida
	document.getElementById("txtIdResultado").value = resultado;




}
