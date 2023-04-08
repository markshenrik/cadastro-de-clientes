import {readClient} from '../crud/crud.js'
import {deleteClient} from '../crud/crud.js'
import {updateTable} from '../table/update.js'



const editClient = (index) => {
  const fillFields = (client) => {
    document.getElementById("nome").value = client.nome;
    document.getElementById("email").value = client.email;
    document.getElementById("celular").value = client.celular;
    document.getElementById("cidade").value = client.cidade;
    document.getElementById("nome").dataset.index = client.index;
  };
  
  const client = readClient()[index];
  client.index = index;
  fillFields(client);
  openModal();
};

const editDelete = (event) => {
  if (event.target.type == "button") {
    const [action, index] = event.target.id.split("-");
    if (action == "edit") {
      editClient(index);
    } else {
      const client = readClient()[index];
      const response = confirm(
        `Deseja realmente excluir o cliente ${client.nome}`
      );
      if (response) {
        deleteClient(index);
        updateTable();
      }
    }
  }
};

document.querySelector("#tableClient>tbody").addEventListener("click", editDelete);