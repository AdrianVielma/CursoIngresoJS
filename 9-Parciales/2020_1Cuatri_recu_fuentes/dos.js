
/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/


function mostrar() {
  var tipo;
  var precio;
  var cantidad;
  var marca;
  var respuesta = true;
  var alcoholBarato;
  var cantidadABarato;
  var marcaABarato;
  var flagAlcohol = 0;
  var acumuladorAlcohol = 0;
  var acumuladorJabon = 0;
  var acumuladorBarbijo = 0;
  var productoMasCantidad;
  var contadorDelMaxCantidad;
  var promedio;
  var contadorAlcohol=0;
  var contadorBarbijo=0;
  var contadorJabon=0;

  while (respuesta == true) {


    do {
      tipo = prompt("ingrese el producto barbijo/jabon/alcohol");

    } while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol");

    do {
      precio = prompt("ingrese el precio");
     //             200      
    } while ((precio < 100 && precio > 300));
    precio = parseFloat(precio);
    do {
      cantidad = prompt("ingrese la cantidad de unidades")
    } while (cantidad < 0 && cantidad > 1000);
    cantidad = parseInt(cantidad);
    marca = prompt("ingrese la marca");

    switch (tipo) {
      case "alcohol":
        contadorAlcohol++;
        if (precio < alcoholBarato || flagAlcohol == 0) {
          alcoholBarato = precio;
          cantidadABarato = cantidad;
          marcaABarato = marca;
          acumuladorAlcohol + cantidad;
          flagAlcohol = 1;
        }
        break;
      case "barbijo":
        contadorBarbijo++;
        acumuladorBarbijo + cantidad;
      case "jabon":
        contadorJabon++;
        acumuladorJabon + cantidad;
        break;
    }

    if (acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo) {
      productoMasCantidad = cantidad;
      contadorDelMaxCantidad = contadorAlcohol;
    } else if (acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo) {
      productoMasCantidad = cantidad;
      contadorDelMaxCantidad = contadorJabon;
    } else {
      productoMasCantidad = cantidad;
      contadorDelMaxCantidad = contadorBarbijo;
    }


    respuesta = confirm("desea realizar otra carga?");
  }
  promedio = productoMasCantidad / contadorDelMaxCantidad

  document.write("A:la cantidad de unidades del alcohol mas barato" + acumuladorAlcohol + "y el fabricante " + marcaABarato + "B: el tipo con mas unidades " + productoMasCantidad + " y su promedio" + promedio + "C:unidades de jabones totales" + acumuladorJabon)




}
/*a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
