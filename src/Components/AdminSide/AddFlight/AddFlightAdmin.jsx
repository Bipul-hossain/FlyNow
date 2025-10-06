import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AddFlightAdmin = () => {
  const [roads, setRoads] = useState([]);
  const [destination, setDestination] = useState([]);
  const [price, setPrice] = useState([]);
  const [seats, setSeats] = useState([]);
  const [errorMessage, setErrorMassage] = useState("");

  const navigate = useNavigate();

  let newSeatsArray = [];
  const handleSeats = (e) => {
    const totalSeat = parseInt(e.target.value);
    for (let i = 0; i < totalSeat; i++) {
      const seatObject = {
        seatNumber: i + 1,
        allRoads: roads,
      };

      console.log(seatObject);

      newSeatsArray.push(seatObject);
    }
    setSeats(newSeatsArray);
  };

  const handleAddRoad = (e) => {
    e.preventDefault();
    const roadsAdded = [...roads, e.target.road.value];
    setRoads(roadsAdded);
    e.target.reset();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const flight = {
      flightName: e.target.flightName.value,
      flightRoadGo: roads,
      flightDate: e.target.flightDate.value,
      flightTime: e.target.flightTime.value,
      priceList: price,
      flightSeat: seats,
    };
    axios
      .post("http://localhost:3000/api/aroplane", flight)
      .then(function (response) {
        console.log(response);
        navigate("/admin/all/flight/list");
      })
      .catch(function (error) {
        console.log(error);
        setErrorMassage("Something goes Wrong!!");
      });
  };

  useEffect(() => {
    let priceArray = [];
    for (let i = 0; i < roads.length; i++) {
      for (let j = i; j < roads.length; j++) {
        if (j + 1 < roads.length) {
          console.log("Destinatino", roads[i]);
          console.log("orintation", roads[j + 1]);
          const newPrice = {
            from: roads[i],
            to: roads[j + 1],
            price: 0,
          };
          priceArray.push(newPrice);
        }
      }
    }
    setPrice(priceArray);
  }, [roads]);

  //   console.log(price);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-1">
            ✈️ Add New Flight
          </h2>
          <p className="text-gray-500 text-sm">
            Fill in the details below to create a new flight schedule.
          </p>
        </div>

        {/* Road Add Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Flight Routes
          </h3>
          <form className="flex gap-3" onSubmit={handleAddRoad}>
            <input
              type="text"
              name="road"
              placeholder="Enter flight route (e.g., Dhaka → Delhi)"
              required
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Add
            </button>
          </form>

          {roads.length > 0 && (
            <ol className="list-decimal ml-6 mt-3 text-gray-700 space-y-1">
              {roads.map((road, i) => (
                <li key={i}>{road}</li>
              ))}
            </ol>
          )}
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmitForm} className="space-y-5">
          {/* Flight Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Flight Name
            </label>
            <input
              type="text"
              placeholder="Enter flight name"
              name="flightName"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Flight Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Flight Date
            </label>
            <input
              type="date"
              name="flightDate"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Flight Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Flight Time
            </label>
            <input
              type="text"
              name="flightTime"
              placeholder="Enter flight time (e.g., 10:30 AM)"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Total Seats */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Total Seats
            </label>
            <input
              onChange={handleSeats}
              type="number"
              placeholder="Enter total flight seats"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Price Section */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-1">
              💰 Price List
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {price.map((tk, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    {tk.from} ➝ {tk.to}
                  </label>
                  <input
                    onChange={(e) => (tk.price = e.target.value)}
                    type="number"
                    placeholder="Enter price"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 font-semibold text-center">
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-all duration-200">
            🚀 Post Flight
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFlightAdmin;
