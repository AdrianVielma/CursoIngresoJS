/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/
function mostrar()
{
	var nombres;
	var comprador;
	var cantidadPasajes;
	var precioTotalPaquete;
	var tipoAsiento;
	var tipoViaje;
	var tipoDestino;
	var pasaje=10000;
	nombres = prompt("ingrese nombre del vendedor:Pepepeposo/Quinoto/Huesos");
	while (nombres != "Pepepeposo" && nombres != "Quinoto" && nombres != "Huesos") {
		alert("ingrese un nombre valido.Pepepeposo/Quinoto/Huesos");
		nombres = prompt("ingrese nombre del vendedor:Pepepeposo/Quinoto/Huesos");
	}
	comprador = prompt("ingrese nombre del comprador");
	cantidadPasajes = prompt("ingrese cantidad de pasajes");
	precioTotalPaquete = prompt("ingrese precio total del paquete");
	while (precioTotalPaquete < 10000){
		alert("ingrese un monto valido");
		precioTotalPaquete = prompt("ingrese precio total del paquete");
	}
	tipoAsiento = prompt("ingrese que tipo de clase");
	tipoViaje = prompt("indique si el viaje es directo o con escala")
	tipoDestino = prompt("indique si el destino es nacional o internacional")


}//FIN DE LA FUNCIÓN