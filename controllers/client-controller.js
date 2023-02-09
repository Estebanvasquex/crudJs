import { clientServices } from "../service/client-service.js";


console.log(clientServices); 

console.log("hola mundossss");


//backticks
const crearNuevaLinea = (nombre, email, id) => {
    console.log(id);
    const linea = document.createElement("tr");
    const contenido = `
      <td class="td" data-td>
        ${nombre}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
    linea.innerHTML = contenido;

   /*  Funcion eliminar clientServices, 1 se selecciona el boton 2. se crea el escuchador 3 se hace el llamdo a la función 4 se agrega el id aal botón id="${id}" */
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
      /* todo las propiedades del boton se pueden usar como las de un objeto */
      const id = btn.id;
      clientServices.eliminarCliente(id).then(respuesta => {
        console.log(respuesta);
      }).catch(err => alert("Ocurrio un error"))
    })



    return linea;
  };
  
  const table = document.querySelector("[data-table]");

  clientServices
    .listaClientes()
    .then((data) => {
    data.forEach((perfil) => {
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email, perfil.id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

