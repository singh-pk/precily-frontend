const persistData = (name, data) => {
  if (typeof window !== undefined) {
    sessionStorage.setItem(`${name}`, JSON.stringify(data));
  }
};

export default persistData;
