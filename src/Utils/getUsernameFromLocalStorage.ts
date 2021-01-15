const getUsernameFromLocalStorage = (key: string) => {
  const username = localStorage.getItem(key);
  return username || "";
};

export default getUsernameFromLocalStorage;
