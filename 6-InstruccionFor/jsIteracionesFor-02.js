/*Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis. */


function mostrar()
{

	function mostrar() {
		let nombreIngresado;
		let edadIngresada;
		let tipoIngresado;
		let pesoIngresado;
		let diagnosticoIngresado;
		let vacunaIngresada;
		let edadVieja;
		let edadJoven;
		let nombreDeJoven;
		let diagnositicoDeJoven;
		let nombreDeViejo;
		let tipoMasIngresado;
		let cantidadDeSinVacuna = 0;
		let contadorGatos = 0;
		let contadorHamsters = 0;
		let contadorPerros = 0;
		let contadorDeOtitis =0;
		let flag = 0;
		let respuesta = true;
	
		while (respuesta == true) {
			nombreIngresado = prompt("Ingrese nombre de su mascota");
			edadIngresada = prompt("Ingrese la edad de su mascota 1 a 20");
			while (!(edadIngresada > 0 && edadIngresada <= 20)) {
				alert("Ingrese una edad valida");
				edadIngresada = prompt("Ingrese la edad de su mascota 1 a 20");
			}
			tipoIngresado = prompt("Ingrese el tipo de mascota gato, perro,hamster");
			while (tipoIngresado != "gato" && tipoIngresado != "perro" && tipoIngresado != "hamster") {
				alert("Ingrese una tipo valido");
				tipoIngresado = prompt("Ingrese el tipo de mascota gato, perro,hamster");
			}
			pesoIngresado = prompt("Ingrese el peso de su mascota");
			while (!(pesoIngresado > 0)) {
				alert("Ingrese una peso valido");
				pesoIngresado = prompt("Ingrese el peso de su mascota");
			}
			diagnosticoIngresado = prompt("Ingrese el diagnostico de su mascota problemas digestivos, otitis, alergias en la piel, parasitos, picazon de abeja");
			while (diagnosticoIngresado != "problemas digestivos" && diagnosticoIngresado != "otitis" && diagnosticoIngresado != "alergias en la piel" && diagnosticoIngresado != "parasitos" && diagnosticoIngresado != "picazon de abeja") {
				alert("Ingrese un diagnositico valido");
				diagnosticoIngresado = prompt("Ingrese el diagnostico de su mascota problemas digestivos, otitis, alergias en la pie, parasitos, picazon de abeja");
			}
			vacunaIngresada = prompt("Ingrese si tiene la vacuna antirrabica si/no");
			while (vacunaIngresada != "si" && vacunaIngresada != "no") {
				alert("Ingrese una respuesta valida");
				vacunaIngresada = prompt("Ingrese si tiene la vacuna antirrabica si/no");
			}
			edadIngresada = parseInt(edadIngresada);
			pesoIngresado = parseInt(pesoIngresado);
			if (flag == 0) {
				edadVieja = edadIngresada;
				edadJoven = edadIngresada;
				nombreDeViejo = nombreIngresado;
				nombreDeJoven = nombreIngresado;
				diagnositicoDeJoven = diagnosticoIngresado;	
				flag = 1;
			}
			if (edadIngresada > edadVieja) {
				edadVieja = edadIngresada;
				nombreDeViejo = nombreIngresado;
			} else if (edadIngresada < edadJoven) {
				edadJoven = edadIngresada
				nombreDeJoven = nombreIngresado;
				diagnositicoDeJoven = diagnosticoIngresado;	
			}
			if (vacunaIngresada == "no" && diagnosticoIngresado == "parasitos") {
				cantidadDeSinVacuna++;
			}
			if (tipoIngresado == "gato" && diagnosticoIngresado == "problemas digestivos") {
				contadorGatos++;
			} else if (tipoIngresado == "perro" && diagnosticoIngresado == "problemas digestivos") {
				contadorPerros++;
			} else if (tipoIngresado == "hamster" && diagnosticoIngresado == "problemas digestivos") {
				contadorHamsters++;
			}
			if (contadorGatos > contadorPerros && contadorGatos > contadorHamsters) {
				tipoMasIngresado = contadorGatos;
			} else if (contadorPerros > contadorGatos && contadorPerros > contadorHamsters) {
				tipoMasIngresado = contadorPerros;
			} else if (contadorHamsters > contadorPerros && contadorHamsters > contadorGatos) {
				tipoMasIngresado = contadorHamsters;
			}
			if (tipoIngresado == "perro" && diagnosticoIngresado == "otitis") {
				contadorDeOtitis++;
			}
			respuesta = confirm("Desea ingresar otra mascota");
		}
		document.write("A: El nombre de la mascota mas vieja con vacuna antirrabica es " + nombreDeViejo +
		"B: La cantidad de mascotas sin vacuna antirrabica y parasitos es de " + cantidadDeSinVacuna +
		"C: El nombre de la mascota mas joven es" + nombreDeJoven + "la edad es de " + edadJoven + "el diagnostico es " +
		diagnositicoDeJoven + "D: la cantidad de perros con otitis es de " + contadorDeOtitis);
	} 
}