import React, { useEffect, useState } from "react";
import axios from "axios";

const AddFlightAdmin = () => {
  const [roads, setRoads] = useState([]);
  const [destination, setDestination] = useState([]);
  const [price, setPrice] = useState([]);
  const [seats, setSeats] = useState([]);

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
      })
      .catch(function (error) {
        console.log(error);
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
    <div className="mt-3">
      <div className="text-center text-2xl font-bold text-blue-600">
        Add New Flight
      </div>
      <div
        className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 border border-gray-200"
        action="">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          ✈️ Add New Flight
        </h2>

        <form className="flex justify-center" onSubmit={handleAddRoad}>
          <input
            type="text"
            name="road"
            placeholder="Enter flight road"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="btn btn-circle">Add</button>
        </form>
        <h1>
          Flight Road:
          <ol className="list-decimal ms-5">
            {roads.map((road) => (
              <li>{road}</li>
            ))}
          </ol>
        </h1>
        <form onSubmit={handleSubmitForm}>
          {/* Flight Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Flight Name
            </label>
            <input
              type="text"
              placeholder="Enter flight name"
              name="flightName"
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Flight Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Flight Date
            </label>
            <input
              type="date"
              name="flightDate"
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Flight Time */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Flight Time
            </label>
            <input
              type="text"
              name="flightTime"
              placeholder="Enter flight time"
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Total Seats
            </label>
            <input
              onChange={handleSeats}
              type="number"
              placeholder="Enter total Flight Seat"
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <h1>Price list add</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {price.map((tk, index) => (
              <div
                key={index}
                className="flex flex-col p-4 border rounded-lg shadow-sm bg-white">
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition">
            Post Flight
          </button>
        </form>
        <div>
          <h5>{JSON.stringify(price)}</h5>
        </div>
      </div>
    </div>
  );
};

export default AddFlightAdmin;
