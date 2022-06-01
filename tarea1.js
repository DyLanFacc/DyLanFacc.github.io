// El usuario desea calcalura el árae de las siguientes figuras
let figura = prompt("Por favor ponga el nombre (en MAYUSCULAS, correctamente escrita) de la figura para poder dacirle el área de esta misma: ")


// elección de la figura 

switch(figura){
    case "CUADRADO":
    case "cuadrado":
    case "Cuadrado":
        // datos
        lado = prompt("Necesito el valor de uno de los LADOS para calcular el área del Cuadrado")
        // solución
        console.log(`El área del Cuadrado es: ${lado*lado}`)
        document.write(`El área del Cuadrado es: ${lado*lado}`)
        break
    case "ROMBO":
    case "rombo":
    case "Rombo":
        //datos 
        Dmayor = prompt("Para hallar el área del Rombo necesito el valor del DIAGONAL MAYOR")
        Dmenor = prompt("¡Falta poco! Ahora necesito el valor del DIAGONAL MENOR")
        // solución
        console.log(`El área del Rombo es: ${(Dmayor*Dmenor)/2}`)
        document.write(`El área del Rombo es: ${(Dmayor*Dmenor)/2}`)
        break
    case "ROMBOIDE":
    case "romboide":
    case "Romboide":
        // datos
        base = prompt("Para hallar el árae del Romboide necesito el valor de la BASE")
        altura = prompt("¡Falta poco! Ahora necesito el valor de la ALTURA")
        // solución
        console.log(`El área del Romboide es: ${base*altura}`)
        document.write(`El área del Romboide es: ${base*altura}`)
        break
    case "TRAPECIO":
    case "trapecio":
    case "Trapecio":
        //datos
        Bmenor = prompt("Para hallar el área  del Trapecio necesito 3 valores y la BASE MENOR es uno de ellos, por favor escribe el valor de la BASE MENOR ")
        Bmayor = prompt("¡Muy bien! Ya solo faltan 2 valores más, por favor escribe el valor de la BASE MAYOR")
        altura =prompt("¡Falta poco! Ahora solo necesito el valor de la ALTURA")
        // solución
        console.log(`El área del Trapecio es: ${altura*(Bmayor*Bmenor)/2}`)
        document.write(`El área del Trapecio es: ${altura*(Bmayor*Bmenor)/2}`)
        break
    case "PENTÁGONO":
    case "pentágono":
    case "Pentágono":
        // datos
        perimetro = ("Necesito el valor del PERIMETRO (si no reconoces el perimetro, recuerda que la formula para hallarlo es: P: 5 x L)")
        apotema = ("¡Casi termino! Solo necesito el valor del apotema, que se cálcula midiendo la distancia existente entre el centro del Pentágono hasta la base de la misma")
        // slución 
        console.log(`El área del Pentágono es: ${(perimetro*apotema)/2}`)
        document.write(`El área del Pentágono es: ${(perimetro*apotema)/2}`)
        break
}
