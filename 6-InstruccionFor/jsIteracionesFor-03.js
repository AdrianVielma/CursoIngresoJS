
/*Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)*/





function mostrar()
{

	let nombreMueble;
	let materialDelMueble;
	let peso;
	let altura;
	let anchura;
	let precio;
	let impuesto;
	let promedioVenta;
	let alturaMax;
	let pesoMin;
	let porcentajeMueblesMaderas;
	let porcentajeMueblesMetales;
	let porcentajeMueblesVidrios;
	let montoTotal;
	let precioMadera;
	let totalMadera;
	let acumuladorPrecio = 0;
	let contadorVentas = 0;
	let cantidadMueblesMadera = 0;
	let contadorMadera = 0;
	let contadorMetal = 0;
	let contadorVidrio = 0;
	let flag = 0;
	let flag2 = 0;
	let respuesta = true;

	do {
		nombreMueble = prompt("Ingrese nombre del mueble");
		materialDelMueble = prompt("Ingrese material del mueble: Madera, Metal y Vidrio");
		peso = prompt("Ingrese peso del mueble");
		altura = prompt("Ingrese altura del mueble");
		anchura = prompt("Ingrese anchura del mueble");
		do {
			precio = prompt("Ingrese precio del mueble");
			precio = parseFloat(precio);
		} while (precio < 1);

		peso = parseInt(peso);
		altura = parseInt(altura);
		anchura = parseInt(anchura);

		contadorVentas++;
		precioMadera = 0;
		promedioVenta = precio / contadorVentas;
		impuesto = precio * 15 / 100;

		if (materialDelMueble == "Madera") {
			totalMadera = precioMadera + precio + impuesto;
			cantidadMueblesMadera++;
		} else if (materialDelMueble == "Metal") {
			if (flag == 0) {
				alturaMax = altura;
				flag = 1;
			}
			if (altura > alturaMax) {
				alturaMax = altura;
			}
		}
		if (flag2 == 0) {
			pesoMin = peso;
			flag2 = 1;
		}
		if (peso < pesoMin) {
			pesoMin = peso;
		}
		switch (materialDelMueble) {
			case "Madera":
				contadorMadera++;
				break;
			case "Metal":
				contadorMetal++;
				break;
			case "Vidrio":
				contadorVidrio++;
				break;
		}
		if (contadorMetal == 0) {
			alturaMax = "No se ingreso muebles de metal";
		}
		porcentajeMueblesMaderas = contadorMadera * 100 / contadorVentas;
		porcentajeMueblesMetales = contadorMetal * 100 / contadorVentas;
		porcentajeMueblesVidrios = contadorVidrio * 100 / contadorVentas;
		acumuladorPrecio = acumuladorPrecio + precio;
		
		respuesta = confirm("Â¿Desea ingresar mas muebles?");
	} while (respuesta == true);
	montoTotal = acumuladorPrecio;
	document.write("A: El precio promedio por mueble vendido es de " + promedioVenta.toFixed(2) + 
	" B: La cantidad total de muebles de madera es de " + contadorMadera +
	" C: El mueble de metal mas alto es de " + alturaMax + 
	" D El mueble mas liviano es de " + pesoMin +
	" E El porcentaje de cada tipo de material es Madera: " + porcentajeMueblesMaderas + "%" + " Metales: " + porcentajeMueblesMetales + "%" +
	" Vidrios " + porcentajeMueblesVidrios + "%" + " F: El monto bruto es de " + montoTotal.toFixed(2) +
	" G: El monto total recaudado de madera es de " + totalMadera.toFixed(2));


}//FIN DE LA FUNCIÓN