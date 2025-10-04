const setSearchToLS = (data) => {
  localStorage.setItem("search", JSON.stringify(data));
};

const getSearchToLs = () => {
  const search = JSON.parse(localStorage.getItem("search"));
  return search;
};

export { setSearchToLS, getSearchToLs };
