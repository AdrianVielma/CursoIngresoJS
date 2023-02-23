/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//declaro variables
	var importeIngresado;
	var	resultado;
	var aumento;

	importeIngresado = document.getElementById("txtIdSueldo").value;

	//parseo
	importeIngresado = parseFloat(importeIngresado);

	aumento = importeIngresado * 0.1;
	
	resultado = importeIngresado + aumento;
	
	
	//salida 
	document.getElementById("txtIdResultado").value = resultado;


}
