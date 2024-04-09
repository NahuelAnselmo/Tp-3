/*Definir una función que muestre información sobre una 
cadena de texto que se le pasa como argumento. A partir 
de la cadena que se le pasa, la función determina si 
esa cadena está formada sólo por mayúsculas, sólo por 
minúsculas o por una mezcla de ambas. */

function mostrarInfoCadena(cadena) {

    if (cadena === null || cadena == "" ) {
        return "Ingrese algun texto para validar la cadena";
    }

    if (cadena === cadena.toLowerCase()){
        return "La cadena esta Compuesta por Minuscula.";
    }

    if (cadena === cadena.toUpperCase()){
        return "La cadena esta Compuesta por Mayuscula.";
    }

    return "La cadena esta Compuesta por Mayusculas y Minusculas.";
}

let cadena = prompt("Ingrese una cadena de texto");
let texto = mostrarInfoCadena(cadena);
document.write(texto);