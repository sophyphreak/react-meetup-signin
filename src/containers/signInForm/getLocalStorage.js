const getLocalStorage = () => {
  let local = [];
  if (!JSON.parse(localStorage.getItem('local'))) {
    return local;
  }
  return JSON.parse(localStorage.getItem('local'));
};

export default getLocalStorage;
