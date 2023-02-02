/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variable
	var primerNumeroIngresado;
	var primerNumero;
	var segundoNumeroIngresado;
	var segundoNumero;
	var	resultado;
 	//parseo
	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;

	primerNumero = parseInt(primerNumeroIngresado);

	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	segundoNumero = parseInt(segundoNumeroIngresado);

	resultado = primerNumero + segundoNumero; 

	alert("El resultado es: " + resultado);
}

