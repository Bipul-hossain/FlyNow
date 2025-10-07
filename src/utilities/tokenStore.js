const getTokenLs = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  }
  return JSON.parse(token);
};

const setTokenLS = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export { getTokenLs, setTokenLS };
