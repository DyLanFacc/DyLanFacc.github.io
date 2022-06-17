// (1) Crear un formulario con botones para ingresar información atravez de JavaScript

// paso 1: vamos a seleccionar el boton que produzca un evento

// paso 2: añadiremos un manejador de eventos
document.getElementById("boton").addEventListener("click",function(){
    // exctraer los datos del usuario, declaando variable
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value

    //mostrar la información
    document.getElementById("salida").innerHTML= "Bienvenido "+nombre+" a nuestra tienda vitual y queremos agradecerte, ya que a tus "+edad+" años de pudiste visitar nuestro sitio web."
})
