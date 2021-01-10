const getUsernameFromLocalStorage = (key) => localStorage.getItem(key) ? localStorage.getItem(key) : "";

export default getUsernameFromLocalStorage;