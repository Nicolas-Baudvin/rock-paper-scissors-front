const getStringFromLocalStorage = (key) => localStorage.getItem(key) ? localStorage.getItem(key) : "";

export default getStringFromLocalStorage;