

//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

/* Forma corta para un fetch sencillo */
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta)=> respuesta.json());

/* const listaClientes = () => {
  return fetch("http://localhost:3000/perfil").then((respuesta)=>{
    return respuesta.json();
  });
  
}; */



const crearCliente = (nombre, email) => {
  //se retorna la conexión a la api
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    //se pasan los datos de un json a un texto para que puedan viajar por http, se agrega el argumento id y se le da el valor ahí mismo con la libreria uuid.v4() esto genera un número unico
    body: JSON.stringify({nombre, email, id: uuid.v4()}),
  });
};

//aquí se exportan las funciones con las que se quiere trabajar
export const clientServices = {
  listaClientes,
  crearCliente,
};

