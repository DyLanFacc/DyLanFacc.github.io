// Juego de números aleatorios del 1 al 10
// aleatorios: math.random() 0 a 09
// math.ceil --> redondear el número
var numero = Math.ceil(Math.random()*10)

//progrmas el manejador de eventos con el boton click
document.getElementById("boton").addEventListener("click",function(){
    //obtener la entrada del usuario
    var dato = document.getElementById("numero").value

    //comprobamos si hemos acertado
    if(numero == dato){
        alert("Excelente, acertasta el número")
        location.reload() //se volverá a carga la pregunta
    }
    else{
        alert("Que pena, el número era "+numero+"\n pulsa el botón para vovler a jugar")
        location.reload()
    }
})