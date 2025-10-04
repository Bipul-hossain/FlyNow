import React from "react";

const List = ({ flight }) => {
  const { _id, flightName, flightRoadGo, flightDate, flightTime } = flight;

  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-xl p-6 mb-4 border border-gray-200 hover:shadow-lg transition duration-300">
      {/* Flight Info */}
      <div>
        <h1 className="text-xl font-bold text-gray-800">✈️ {flightName}</h1>
        <p className="text-gray-600 mt-1">📅 {flightDate}</p>
        <p className="text-gray-600">🕒 {flightTime}</p>

        {/* Roads */}
        <div className="flex gap-2 flex-wrap mt-3">
          {flightRoadGo.map((road, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full uppercase">
              {road}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div>
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition">
          Update Flight
        </button>
      </div>
    </div>
  );
};

export default List;

// {
//     "_id": "68e0c7e4b0ff1b42032b37cb",
//     "flightName": "Fly America",
//     "flightRoadGo": [
//         "bangladesh",
//         "india",
//         "japan",
//         "france",
//         "german"
//     ],
//     "flightRoadBack": [
//         "german",
//         "france",
//         "japan",
//         "india",
//         "bangladesh"
//     ],
//     "flightDate": "2025-10-22",
//     "flightTime": "10:30 PM",
//     "flightSeat": [
//         {
//             "seatNumber": 1,
//             "allRoads": [
//                 "booked",
//                 "booked",
//                 "booked",
//                 "france",
//                 "german"
//             ],
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37cd"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37ce"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37cf"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d0"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d1"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d2"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d3"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d4"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d5"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d6"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68e0c7e4b0ff1b42032b37cc"
//         },
//         {
//             "seatNumber": 2,
//             "allRoads": [
//                 "bangladesh",
//                 "india",
//                 "japan",
//                 "france",
//                 "german"
//             ],
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d8"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37d9"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37da"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37db"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37dc"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37dd"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37de"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37df"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e0"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e1"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68e0c7e4b0ff1b42032b37d7"
//         },
//         {
//             "seatNumber": 3,
//             "allRoads": [
//                 "bangladesh",
//                 "india",
//                 "booked",
//                 "booked",
//                 "german"
//             ],
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e3"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e4"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e5"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e6"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e7"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e8"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37e9"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37ea"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37eb"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68e0c7e4b0ff1b42032b37ec"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68e0c7e4b0ff1b42032b37e2"
//         }
//     ],
//     "__v": 0
// }
