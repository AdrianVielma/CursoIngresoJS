/* Al ingresar una edad debemos informar si la persona es mayor de edad
 (mas de 18 años) o adolescente (entre 13 y 17 años) o 
 niño (menor a 13 años).*/
function mostrar()
{
    var edad;

    edad = document.getElementById("txtIdEdad").value;

    edad = parseInt(edad);

    if (edad > 17){
        alert ("la persona es mayor de edad");
    }
    else  {
       if(edad < 13) {
        alert("La persona es un niño");
       } else {
        alert("la persona es adolescente");
       }
    }

}//FIN DE LA FUNCIÓN

// && = and (y logico) = el and funciona por cortocircuito para que sea true
/* || = or (o logico) = con que cualquiera de las 
condiciones sean verdaderas entra al if */