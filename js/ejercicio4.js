/*4- Escribir el código de una función a la que se pasa 
como parámetro un número entero y devuelve como 
resultado una cadena de texto que indica si el número 
es par o impar. Mostrar por pantalla el resultado 
devuelto por la función. */

function esPar(numero) {
    if (!isNaN(numero) && numero !== "") 
    {
        if (numero % 2 === 0) {
            return "El numero ingresado es Par";
        } else{
            return "El numero ingresado es Impar";
        }
    }else{
        return alert("El numero ingresado no puede ser vacio, ingrese un numero valido");
    }
}

let numero = parseInt(prompt("Ingrese un número entero"));

document.write(esPar(numero));