/*2-  Crear un script que solicite al usuario mediante
un prompt el nombre de ciudades y almacenarlas en un
arreglo, cuando el usuario selecciona cancelar se 
debe mostrar el arreglo generado, luego realizar las
siguientes acciones: */


let ciudades = [];

let ciudad;
while (ciudad !== null) {
    ciudad = prompt("Ingrese la ciudad, presione cancelar para mostrar la lista");
    if (ciudad !== null && ciudad !== "" && /^[a-zA-Z]+$/.test(ciudad)) {
        ciudades.push(ciudad);
    }else if (ciudad !== null) { 
        alert("El nombre de la ciudad no puede contener números ni estar vacío. Por favor, inténtelo de nuevo.");
    }
}

document.write("<h1>Arreglo de Ciudades</h1>");
for (let i = 0; i < ciudades.length; i++) {
    document.write("</br>Elementos: °" + ciudades[i]);
}

if (ciudades.length > 0) {
    
    document.write("</br></br></br> El arreglo de ciudades tiene " + ciudades.length + " elementos");
    
    document.write("<br> ° Elemento 1ra posicion: " + ciudades[0]);
    
    document.write("<br> ° Elemento 3ra posicion: " + ciudades[2]);
    
    document.write("<br> ° Elemento ultima posicion: " + ciudades[ciudades.length - 1]);

    document.write("<br> ° Elemento 2da posicion: " + ciudades[1]);
    
    ciudades.push("Paris");

    ciudades[1] = "Barcelona";

    document.write("<br><h2>Arreglo de ciudades actualizado</br> </h2>");
    for (let i = 0; i < ciudades.length; i++) {
        document.write("</br>Elementos: °" + ciudades[i]);
    }

} else{
    document.write("<h1>No se ingresaron datos</h1>");
}


