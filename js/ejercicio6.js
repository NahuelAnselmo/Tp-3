/*6- Solicitar por pantalla al usuario ingresar el 
valor de los lados de un rectángulo, luego crear una 
función para calcular su perímetro y mostrarlo por 
pantalla. */

function calcularPerimetro(lado1, lado2) {
    
    let perimetro = 0;
    perimetro = 2 * (lado1 + lado2);

    return perimetro;
}

let lado1 = parseFloat(prompt("ingresa el primer valor del rectangulo"));
let lado2 = parseFloat(prompt("ingresa el segundo valor del rectangulo"));

resultado = calcularPerimetro(lado1, lado2);

document.write("El perimetro del rectangulo es: ", resultado);