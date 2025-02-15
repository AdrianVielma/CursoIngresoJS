/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
    var descuento;
    var precioLamparas;
    var resultado;
    var marca;

    marca = document.getElementById("Marca").value;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;

    precioLamparas = cantidadLamparas * 35;

    descuento = 1;
    

    if(cantidadLamparas > 5 ) {
        descuento = 0.5; //A
    }    
    else{
        if(cantidadLamparas == 5) { //B
            if(marca == "ArgentinaLuz") {
                descuento = 0.6;    
            }
             else{
                descuento = 0.7;
            }
        } else{
            if (cantidadLamparas == 4){
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                    descuento = 0.75;
                }else {
                    descuento = 0.8; //C
            } 
            }else{
                if(cantidadLamparas == 3)
                if (marca == "ArgentinaLuz") {
                    descuento = 0.85
                }
                    
            }
        } 
    }


    resultado = precioLamparas * descuento;    

    document.getElementById("txtIdprecioDescuento").value = resultado;
}
