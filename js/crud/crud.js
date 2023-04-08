import {setLocalStorage, getLocalStorage} from '../local-storage/storage.js';


//            CREATE
const createClient = (client) => {
  const databaseClient = getLocalStorage();
  if (databaseClient) {
    databaseClient.push(client);
    setLocalStorage(databaseClient);
  } else {
    setLocalStorage([client]);
  }
};

//            READ
const readClient = () => getLocalStorage();

//            UPDATE
const updateClient = (index, client) => {
  const databaseClient = readClient();
  databaseClient[index] = client;
  setLocalStorage(databaseClient);
};

//            DELETE
const deleteClient = (index) => {
  const databaseClient = readClient();
  databaseClient.splice(index, 1);
  setLocalStorage(databaseClient);
};

export {readClient, createClient, updateClient, deleteClient}