import { clientServices } from "../service/client-service.js";

/* Capturar el formulario */
const formulario = document.querySelector("[data-form]");

//Se agrega un escuchador con tipo de evento submit y una funcion que se dispara cuando pasa este evento
formulario.addEventListener("submit", (evento) => {
    //Se previene el funcionamiento por defecto del formulario
    evento.preventDefault

    //se captura el valor de los input
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre + "------" + email);

    clientServices.crearCliente(nombre, email).then(respuesta =>{
        //si la respuesta es ok se llama la pantalla  de registro completado
        window.location.href = "/screens/registro_completado.html"
    }).catch(err => console.log(err));
})


