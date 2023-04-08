const setLocalStorage = (databaseClient) =>
  localStorage.setItem("databaseClient", JSON.stringify(databaseClient));

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("databaseClient")) ?? [];

export {setLocalStorage, getLocalStorage}