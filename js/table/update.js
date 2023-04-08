import {readClient} from '../crud/crud.js';

const createRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.celular}</td>
    <td>${client.cidade}</td>
    <td>
        <button type="button" class="button green" id='edit-${index}'>Editar</button>
        <button type="button" class="button red" id='delete-${index}'>Excluir</button>
    </td>
    `;
  document.querySelector("#tableClient>tbody").appendChild(newRow);
};

const updateTable = () => {
  const clearTable = () => {
    const rows = document.querySelectorAll("#tableClient>tbody tr");
    rows.forEach((row) => row.parentNode.removeChild(row));
  };
  const databaseClient = readClient();
  clearTable();
  databaseClient.forEach(createRow);
};

export {updateTable};