const setSearchToLS = (data) => {
  if (localStorage.getItem("search")) {
    localStorage.setItem(
      "search",
      JSON.stringify({ from: "", to: "", flightDate: "" })
    );
  }
  localStorage.setItem("search", JSON.stringify(data));
};

const getSearchToLs = () => {
  const search = JSON.parse(localStorage.getItem("search"));
  return search;
};

export { setSearchToLS, getSearchToLs };
