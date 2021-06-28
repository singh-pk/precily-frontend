const getPersistedData = (name, item) =>
  sessionStorage.getItem(name) &&
  (item
    ? JSON.parse(sessionStorage.getItem(name))[item]
    : JSON.parse(sessionStorage.getItem(name)));

export default getPersistedData;
