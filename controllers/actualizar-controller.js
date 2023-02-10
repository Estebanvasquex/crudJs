import { clientServices } from "../service/client-service.js";


const formulario = document.querySelector("[data-form]")
console.log(formulario);


const obtenerInformación = () =>{
const url = new URL(window.location);
/* con esto puedo capturar una url y a la url se le agregó un params desde el archivo client-controller.js con el nombre "id" href="../screens/editar_cliente.html?id=${id} ahora puedo utilizar ese id para hacer la consulta */
const id = url.searchParams.get("id");
/* valida la url, si lleva el params y ni no es así lo que hace es enviar la página de error */
/* if(id===null  || id === ""){
    console.log("error de id: " + id);
    window.location.href = "/screens/error.html";
} */
const nombre = document.querySelector("[data-nombre]");
const email = document.querySelector("[data-email]");
/* si todo sale bien la respuesta es un json y se le da el nombre de perfil y se imprime en consola */
clientServices.detalleCliente(id).then((perfil) =>{
    nombre.value = perfil.nombre;
    email.value = perfil.email;
});
};

obtenerInformación()

//Esta función se encarga de capturar los datos y actualizarlos en la bd
formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault(); 
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices.actualizarCliente(nombre, email, id).then(()=>{
        //redirecciona en caso de que todo salga bien 
        window.location.href = "/screens/edicion_concluida.html";
    });
});