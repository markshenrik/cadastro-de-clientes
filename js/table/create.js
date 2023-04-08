import {readClient, createClient, updateClient, deleteClient} from '../crud/crud.js';
import {updateTable} from './update.js';

const isValidFields = () => document.getElementById("form").reportValidity();

const saveClient = () => {
  if (isValidFields()) {
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value,
    };
    const index = document.getElementById("nome").dataset.index;
    if (index == "new") {
      createClient(client);
      updateTable();
      closeModal();
    } else {
      updateClient(index, client);
      updateTable();
      closeModal();
    }
  }
};

updateTable();

function addEnterKeyListenerToInputs(inputsForm) {
  inputsForm.forEach(input => {
      input.addEventListener('keyup', (event) => {
        const pressedKey = event.which || event.keyCode;
        const isEnterKeyPressed = pressedKey === 13;
        if (isEnterKeyPressed) {
          saveClient()
        }
      })
    });
};

const inputsForm = document.querySelectorAll(".modal-field");

addEnterKeyListenerToInputs(inputsForm);

document.getElementById("salvar").addEventListener("click", saveClient);
