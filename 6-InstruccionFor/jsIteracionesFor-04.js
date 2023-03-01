/*
Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG)        /3 = promedio
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*/

function mostrar() {
	var AVELLANEDA_PESO = 20000
	var CABA_PESO = 25000
	var LANUS_PESO = 15000

	var bodega;
	var producto;
	var peso;
	var pesoMax;
	var productoMaxPeso;
	var respuesta = true
	var flag;
	var contadorAvellaneda;
	var contadorCaba;
	var contadorLanus;
	var acumuladorAvellaneda;
	var acumuladorLanus;
	var acumuladorCaba;
	var bodegaMaxIngresos;
	var bodegaLlena;
	flag = 0;
	contadorAvellaneda = 0;
	contadorCaba = 0;
	contadorLanus = 0;
	acumuladorAvellaneda = 0;
	acumuladorCaba = 0;
	acumuladorLanus = 0;

	while (respuesta == true) {
		do {
			bodega = prompt("en que bodega desea almacenar el producto?".toLowerCase());
		} while (bodega != "avellaneda" && bodega != "lanus" && bodega != "caba");

		producto = prompt("que va a depositar?");
		peso = prompt("cuanto pesa este producto?");
		while (isNaN(peso) || peso < 0) {
			aler("ingrese un peso valido");
			peso = prompt("cuanto pesa este producto?");
		}
		peso = parseFloat(peso);

		if (pesoMax < peso || flag == 0) {
			pesoMax = peso;
			productoMaxPeso = producto;
			flag = 1;
		}

		switch (bodega) {
			case "avellaneda":
				contadorAvellaneda++;
				if ((acumuladorAvellaneda + peso) > AVELLANEDA_PESO) {
					alert("esta lleno pa");
				} else {
					acumuladorAvellaneda += peso;
				}
				break;

			case "caba":
				contadorCaba++;
				if ((acumuladorCaba + peso) > CABA_PESO) {
					alert("esta lleno pa");
				} else {
					acumuladorCaba += peso;
				}
				break;
			case "lanus":
				contadorLanus++;
				if ((acumuladorLanus + peso) > LANUS_PESO) {
					alert("esta lleno pa");
				} else {
					acumuladorLanus += peso
				}
				break;
		}
		respuesta=confirm("desea continuar?")

	}

	if (contadorAvellaneda > contadorCaba && contadorAvellaneda > contadorLanus) {
		bodegaMaxIngresos = "avellaneda";
	} else if (contadorCaba > contadorAvellaneda && contadorCaba > contadorLanus) {
		bodegaMaxIngresos = "caba";
	} else {
		bodegaMaxIngresos = "lanus";
	}
	if (acumuladorAvellaneda > acumuladorCaba && acumuladorAvellaneda > acumuladorLanus) {
		bodegaLlena = "avellaneda";
	} else if (acumuladorCaba > acumuladorAvellaneda && acumuladorCaba > acumuladorLanus) {
		bodegaLlena = "caba";
	} else {
		bodegaLlena = "lanus";
	}


	// A) 
	document.write("A:producto con mas peso en las bodegas: " + productoMaxPeso + "Y el promedio es " + pesoMax / (acumuladorAvellaneda + acumuladorCaba + acumuladorLanus));
	// B) 	
	document.write("B: la bodega con mas ingresos es: " + bodegaMaxIngresos);
	// C)
	document.write("C: la bodega mas llena es: " + bodegaLlena);
	// D) 																			
	alert("D: el porcentaje disponible de Avellaneda" + (100-acumuladorAvellaneda * 100 / AVELLANEDA_PESO));
	alert("%, el porcentaje disponible de lanus es :" + (100-acumuladorLanus * 100 / LANUS_PESO));
	alert("% el porcentaje disponible de caba es de " + (100-acumuladorCaba * 100 / CABA_PESO));
}