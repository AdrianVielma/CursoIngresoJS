/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 * 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos. */


function mostrar() {
	var flag=0;
	var nombre;
	var nacionalidad;
	var posicion;
	var cantidadRojas;
	var goles;
	var golesMax;
	var nombreGoleador;
	var flag1=0;
	var tarjetasRojasmin;
	var argentinoTarjeta;
	var contadorJugadores=0;
	var contadorPiratas=0;
	var porcentajeIngleses;
	respuesta = true

	while (respuesta == true) {


		nombre = prompt("ingrese nombre del jugador");
		nacionalidad = prompt("Ingrese nacionalidad");
		posicion = prompt("Ingrese posicion");
		cantidadRojas = prompt("Ingrese cantidad de rojas");
		while (cantidadRojas < 0) {
			alert("ingrese un numero valido")
			cantidadRojas = prompt("Ingrese cantidad de rojas");
		}
		goles = prompt("Ingrese cantidad de goles");
		while (goles < 0) {
			alert('ingrese un numero valido');
			goles = prompt("Ingrese cantidad de goles");
		}
		cantidadRojas = parseInt(cantidadRojas);
		goles = parseInt(goles);
		contadorJugadores++;
		
		if (goles > golesMax || flag == 0) {
			golesMax = goles;
			nombreGoleador = nombre;
			flag = 1;
		}
		switch (nacionalidad) {
			case "Argentino":
				if(tarjetasRojasmin < cantidadRojas || flag1 == 0)
				tarjetasRojasmin = cantidadRojas;
				argentinoTarjeta = nombre;
				flag1 = 1;
				break;
			case "Ingles":
				contadorPiratas++;
				break;
		}
		porcentajeIngleses = contadorPiratas * 100 / contadorJugadores

		respuesta = confirm("desea continuar?");
	}

	document.write("A: el goleador del torneo es " + nombreGoleador +
	"B: El jugador Argentino con menos rojas es " + argentinoTarjeta +
	"C: el porcentaje de ingles es %" + porcentajeIngleses)
	
}