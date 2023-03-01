/*

En una partida de todos contra todos de CS-GO (Juego de disparos) un grupo de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:
Nombre del jugador.
Edad del jugador - Mayor de edad.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR
A) Nombre del jugador más joven.
B) El jugador que más bajas tuvo.
C) El jugador que menos muertes tuvo.
D) El promedio de bajas.
E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
F) El nombre y edad del jugador que más muertes tuvo.

*/
function mostrar() {
	var nombreJugador;
	var edad;
	var edadMasMuertes
	var edadJoven
	var nombreJoven
	var nombreMenosMuertes
	var nombreMasMuertes
	var bajas;
	var bajasMax;
	var muertes;
	var menosMuertes;
	var masMuertes
	var flagEdad = 0;
	var flagbajas = 0;
	var flagMuertes = 0;
	var flagMasMuertes =0;
	var nombreMaxBajas;
	var acumuladorBajas;
	var promedio
	var contadorVeteranos

	while (condition) {


		nombreJugador = prompt("ingrese nombre del jugador");

		do {
			edad = prompt("ingrese edad del jugador")
		} while (edad < 18);
		edad = parseInt(edad);

		do {
			bajas = prompt("numero de bajas")
		} while (bajas <= 0);
		bajas = parseInt(bajas)

		do {
			muertes = prompt("numero de muertes")
		} while (muertes <= 0);
		muertes = parseInt(muertes)

		if (edad < edadJoven || flagEdad == 0) {
			edadJoven = edad;
			nombreJoven = nombre;
			flagEdad = 1;
		}
		if (bajas > bajasMax || flagbajas == 0) {
			bajasMax = bajas;
			nombreMaxBajas = nombre;
			flagbajas = 1;
		}
		if (muertes < menosMuertes || flagMuertes == 0) {
			menosMuertes = muertes;
			nombreMenosMuertes = nombre;
			flagMuertes = 1;
		}
		if (muertes < masMuertes || flagMuertes == 0) {
			masMuertes = muertes;
			nombreMasMuertes = nombre;
			edadMasMuertes = edad;
			flagMasMuertes = 1;
		}
		if (edad < 20 && edad > 30 && bajas < 10 && bajas > 15) {
			contadorVeteranos++;
		}
		acumuladorBajas = acumuladorBajas + bajas;
	}

	promedio = acumuladorBajas / 5
}//FIN DE LA FUNCIÓN