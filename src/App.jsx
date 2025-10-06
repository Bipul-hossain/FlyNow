import { use, useEffect, useState } from "react";
import "./App.css";
import FlightDetails from "./Components/FlightDetails/FlightDetails";
import { getSearchToLs, setSearchToLS } from "./utilities/localStorage";

const dataJSON = fetch("http://localhost:3000/api/destination").then((res) =>
  res.json()
);

function App() {
  const aroplaneData = use(dataJSON);

  const [search, setSearch] = useState({});
  const [toDestinations, setToDestinations] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleSelector = (e) => {
    const toDestinationSelector = aroplaneData[0]?.allDestination?.filter(
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
        getSearchToLs()?.flightDate
      }&from=${getSearchToLs()?.from}&to=${getSearchToLs()?.to}`
    )
      .then((res) => res.json())
      .then((data) => setSearchResult(data));
  }, [search]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg')",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center py-20 px-5">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          ✈ Welcome to <span className="text-yellow-400">FlyNow</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          Find your next destination — Fast, Easy & Affordable
        </p>

        {/* Search Box */}
        <form
          onSubmit={handleSearch}
          className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">From</label>
            <select
              onChange={handleSelector}
              name="from"
              required
              className="select select-bordered bg-white text-gray-700 font-medium">
              <option value="">Select Origin</option>
              {aroplaneData[0]?.allDestination?.map((road, index) => (
                <option key={index}>{road}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">To</label>
            <select
              name="to"
              required
              className="select select-bordered bg-white text-gray-700 font-medium">
              <option value="">Select Destination</option>
              {toDestinations.map((road, index) => (
                <option key={index}>{road}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Date</label>
            <input
              name="date"
              type="date"
              required
              className="input input-bordered bg-white text-gray-700"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8">
              Search Flights
            </button>
          </div>
        </form>

        {/* Results Section */}
        <div className="max-w-6xl mx-auto mt-16">
          {notFound && (
            <p className="text-red-200 text-lg font-semibold">
              ❌ No Flights Found. Try different routes or dates.
            </p>
          )}

          <div className="space-y-4">
            {searchResult.map((detail) => (
              <FlightDetails key={detail._id} detail={detail} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
