const getStringFromLocalStorage = (key) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;

export default getStringFromLocalStorage;