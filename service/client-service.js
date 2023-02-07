

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

export const clientServices = {
  listaClientes,
};




// console.log(data);
//
