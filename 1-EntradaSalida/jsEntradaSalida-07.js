/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var primerNumeroIngresado;
	var primerNumero;
	var segundoNumeroIngresado;
	var segundoNumero;
	var	resultado;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;

	primerNumero = parseInt(primerNumeroIngresado);

	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	segundoNumero = parseInt(segundoNumeroIngresado);

	resultado = primerNumero + segundoNumero; 

	alert("El resultado es: " + resultado);
}

function restar()
{
	var primerNumeroIngresado;
	var primerNumero;
	var segundoNumeroIngresado;
	var segundoNumero;
	var	resultado;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;

	primerNumero = parseInt(primerNumeroIngresado);

	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	segundoNumero = parseInt(segundoNumeroIngresado);

	resultado = primerNumero - segundoNumero; 

	alert("El resultado es: " + resultado);
}

function multiplicar()
{ 
	var primerNumeroIngresado;
	var primerNumero;
	var segundoNumeroIngresado;
	var segundoNumero;
	var	resultado;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;

	primerNumero = parseInt(primerNumeroIngresado);

	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	segundoNumero = parseInt(segundoNumeroIngresado);

	resultado = primerNumero * segundoNumero; 

	alert("El resultado es: " + resultado);
}

function dividir()
{
	var primerNumeroIngresado;
	var primerNumero;
	var segundoNumeroIngresado;
	var segundoNumero;
	var	resultado;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;

	primerNumero = parseInt(primerNumeroIngresado);

	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	segundoNumero = parseInt(segundoNumeroIngresado);

	resultado = primerNumero / segundoNumero; 

	alert("El resultado es: " + resultado);
}

