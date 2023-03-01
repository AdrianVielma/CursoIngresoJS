/*
En una carga indefinida de datos (hasta que el usuario quiera) se desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:
Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
Cantidad de BTC o ETH minado ese día - Número positivo.
Cotización diaria en USD - Número positivo inclusive 0.
INFORMAR
A) Nombre y cantidad de la criptomoneda más minada.
B) Nombre de la criptomoneda que mayor cotización tuvo.
C) Cantidad total de ingreso bruto en USD de cada criptomoneda.

D) Sabiendo que el coste de electricidad para:
BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.

E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
*/

function mostrar() {
	var nombreCripto; //validar
	var cantidadMinado;
	var acumuladorBtc;
	var acumuladorEth;
	var cotizacionDiaria;
	var cotizacionMax;
	var respuesta = true;
	var flagCotizacionB;
	var flagCotizacionE;
	flagCotizacionB = 0;
	flagCotizacionE =0;

	while (respuesta == true) {
		do {
			nombreCripto=prompt("ingrese nombre de la cripto. BTC/ETH")
		} while (nombreCripto != "BTC" && nombreCripto != "ETH");

		do {
			cantidadMinado=prompt("ingrese la cantidad minada en este dia")
		} while (cantidadMinado <= 0 );

		do {
			cotizacionDiaria=prompt("ingrese cotizacion del dia")
		} while (cotizacionDiaria <= 0 );

		switch (nombre) {
			case "BTC":
				acumuladorBtc += cantidadMinado;
				if (cotizacionMax > cotizacionDiaria || flagCotizacionB == 0) {
					cotizacionMax = cotizacionDiaria;
					flagCotizacionB = 1;
				}
				break;
			case "ETH":
				acumuladorEth += cantidadMinado;
				if (cotizacionMax > cotizacionDiaria || flagCotizacionE == 0) {
					cotizacionMax = cotizacionDiaria;
					flagCotizacionE = 1;
				}
				break;
		}
		 

		respuesta = confirm("desea continuar?");
	}
}

