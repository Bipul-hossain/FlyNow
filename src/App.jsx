import { use, useEffect, useState } from "react";
import "./App.css";
import FlightDetails from "./Components/FlightDetails/FlightDetails";
import { getSearchToLs, setSearchToLS } from "./utilities/localStorage";

const dataJSON = fetch("http://localhost:3000/api/destination").then((res) =>
  res.json()
);

function App() {
  const aroplaneData = use(dataJSON);

  // flightRoadGo
  const [search, setSearch] = useState({});
  const [toDestinations, setToDestinations] = useState([]);

  const [searchResult, setSearchResult] = useState([]);
  const [notFund, setNotFound] = useState(false);

  const handleSelector = (e) => {
    const toDestinationSelector = aroplaneData[0].allDestination.filter(
      (destination) => destination !== e.target.value
    );
    setToDestinations(toDestinationSelector);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchObject = {
      from: e.target.from.value,
      to: e.target.to.value,
      flightDate: e.target.date.value,
    };
    setSearch(searchObject);
    setSearchToLS(searchObject);
  };
  // console.log(Object.keys(search).length);
  useEffect(() => {
    if (searchResult.length === 0 && Object.keys(search).length !== 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [searchResult]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/api/aroplane/select?flightDate=${
        getSearchToLs().flightDate
      }&from=${getSearchToLs().from}&to=${getSearchToLs().to}`
    )
      .then((res) => res.json())
      .then((date) => setSearchResult(date));
  }, [search]);
  return (
    <>
      <div className="m-5 flex flex-col justify-center items-center border-b-2 border-dashed border-b-gray-500">
        <h1 className=" text-4xl font-bold text-indigo-700">
          Welcome to Our Fly Now
        </h1>
        <p className="text-2xl font-bold">Big Discound Up to 45%</p>
      </div>
      <div className="p-10">
        <form
          className="flex justify-center items-center gap-3"
          onSubmit={handleSearch}>
          <label htmlFor="">From</label>
          <select
            onChange={handleSelector}
            name="from"
            defaultValue="Pick a color"
            className="select">
            <option disabled={true}>Pick a color</option>
            {aroplaneData[0].allDestination.map((road, index) => (
              <option key={index}>{road}</option>
            ))}
          </select>
          <label htmlFor="">To</label>
          <select name="to" defaultValue="Pick a color" className="select">
            <option disabled={true}>Pick a color</option>
            {toDestinations.map((road, index) => (
              <option key={index}>{road}</option>
            ))}
          </select>
          <label htmlFor="">Date</label>

          <input name="date" type="date" className="input" />

          <button className="btn btn-primary" type="submit">
            SEARCH
          </button>
        </form>
      </div>
      <div>
        {notFund && <p>Not Flight Found</p>}
        {searchResult.map((detail) => (
          <FlightDetails detail={detail}></FlightDetails>
        ))}
      </div>
    </>
  );
}

export default App;
