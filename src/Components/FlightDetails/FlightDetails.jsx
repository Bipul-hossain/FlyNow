import React from "react";
import { Link } from "react-router";
import { getSearchToLs } from "../../utilities/localStorage";

const FlightDetails = ({ detail }) => {
  const { flightName, flightDate, flightTime, _id, priceList } = detail;
  const price = priceList.find(
    (price) =>
      price.from === getSearchToLs()?.from && price.to === getSearchToLs()?.to
  );

  return (
    <div className="relative mx-16 my-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex justify-between items-center border border-indigo-100">
      {/* Decorative Left Border */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-2xl"></div>

      {/* Flight Info */}
      <div className="ml-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          ✈ {flightName}
        </h1>
        <h2 className="text-sm font-medium text-gray-600 mt-2 flex items-center gap-2">
          📅 <span>{flightDate}</span>
        </h2>
        <h2 className="text-sm font-medium text-gray-600 mt-1 flex items-center gap-2">
          🕒 <span>{flightTime}</span>
        </h2>
      </div>

      {/* Price Section */}
      <div className="text-center">
        <div className="bg-white border-2 border-indigo-400 rounded-xl px-6 py-3 shadow-sm hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Ticket Price</p>
          <p className="text-3xl font-extrabold text-indigo-600">
            ${price?.price}
          </p>
          <p className="text-gray-400 text-xs">per person</p>
        </div>
      </div>

      {/* Button */}
      <Link to={`flightseat/${_id}`}>
        <button className="ml-6 px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FlightDetails;

// {
//     "_id": "68dfd3e93317fb2b4af71ea6",
//     "flightName": "SkyView Supper First Plane",
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
//     "flightDate": "2025-10-21",
//     "flightTime": "10:30 PM",
//     "flightSeat": [
//         {
//             "seatNumber": 1,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ea8"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ea9"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eaa"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eab"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eac"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ead"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eae"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eaf"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb0"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb1"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71ea7"
//         },
//         {
//             "seatNumber": 2,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb3"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb4"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb5"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb6"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb7"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb8"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eb9"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eba"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ebb"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ebc"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71eb2"
//         },
//         {
//             "seatNumber": 3,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ebe"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ebf"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec0"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec1"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec2"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec3"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec4"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec5"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec6"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec7"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71ebd"
//         },
//         {
//             "seatNumber": 4,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ec9"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eca"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ecb"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ecc"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ecd"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ece"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ecf"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed0"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed1"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed2"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71ec8"
//         },
//         {
//             "seatNumber": 5,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed4"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed5"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed6"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed7"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed8"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ed9"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eda"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71edb"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71edc"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71edd"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71ed3"
//         },
//         {
//             "seatNumber": 6,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71edf"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee0"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee1"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee2"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee3"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee4"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee5"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee6"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee7"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ee8"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71ede"
//         },
//         {
//             "seatNumber": 7,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eea"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eeb"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eec"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eed"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eee"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71eef"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef0"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef1"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef2"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef3"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71ee9"
//         },
//         {
//             "seatNumber": 8,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef5"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef6"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef7"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef8"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71ef9"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71efa"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71efb"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71efc"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71efd"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71efe"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71ef4"
//         },
//         {
//             "seatNumber": 9,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f00"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f01"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f02"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f03"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f04"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f05"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f06"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f07"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f08"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f09"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71eff"
//         },
//         {
//             "seatNumber": 10,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f0b"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f0c"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f0d"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f0e"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f0f"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f10"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f11"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f12"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f13"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f14"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f0a"
//         },
//         {
//             "seatNumber": 11,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f16"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f17"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f18"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f19"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f1a"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f1b"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f1c"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f1d"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f1e"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f1f"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f15"
//         },
//         {
//             "seatNumber": 12,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f21"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f22"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f23"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f24"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f25"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f26"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f27"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f28"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f29"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f2a"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f20"
//         },
//         {
//             "seatNumber": 13,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f2c"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f2d"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f2e"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f2f"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f30"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f31"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f32"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f33"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f34"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f35"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f2b"
//         },
//         {
//             "seatNumber": 14,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f37"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f38"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f39"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f3a"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f3b"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f3c"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f3d"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f3e"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f3f"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f40"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f36"
//         },
//         {
//             "seatNumber": 15,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f42"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f43"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f44"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f45"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f46"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f47"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f48"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f49"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f4a"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f4b"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f41"
//         },
//         {
//             "seatNumber": 16,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f4d"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f4e"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f4f"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f50"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f51"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f52"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f53"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f54"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f55"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f56"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f4c"
//         },
//         {
//             "seatNumber": 17,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f58"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f59"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f5a"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f5b"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f5c"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f5d"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f5e"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f5f"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f60"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f61"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f57"
//         },
//         {
//             "seatNumber": 18,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f63"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f64"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f65"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f66"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f67"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f68"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f69"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f6a"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f6b"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f6c"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f62"
//         },
//         {
//             "seatNumber": 19,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f6e"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f6f"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f70"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f71"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f72"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f73"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f74"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f75"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f76"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f77"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f6d"
//         },
//         {
//             "seatNumber": 20,
//             "seatClass": "ecomony",
//             "price": [
//                 {
//                     "from": "bangladesh",
//                     "to": "india",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f79"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "japan",
//                     "price": 15000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f7a"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "france",
//                     "price": 50000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f7b"
//                 },
//                 {
//                     "from": "bangladesh",
//                     "to": "german",
//                     "price": 7000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f7c"
//                 },
//                 {
//                     "from": "india",
//                     "to": "japan",
//                     "price": 2500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f7d"
//                 },
//                 {
//                     "from": "india",
//                     "to": "france",
//                     "price": 5000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f7e"
//                 },
//                 {
//                     "from": "india",
//                     "to": "german",
//                     "price": 7500,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f7f"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "france",
//                     "price": 85000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f80"
//                 },
//                 {
//                     "from": "japan",
//                     "to": "german",
//                     "price": 43000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f81"
//                 },
//                 {
//                     "from": "france",
//                     "to": "german",
//                     "price": 35000,
//                     "isBooked": false,
//                     "_id": "68dfd3e93317fb2b4af71f82"
//                 }
//             ],
//             "bookedRaod": [],
//             "isBooked": false,
//             "_id": "68dfd3e93317fb2b4af71f78"
//         }
//     ],
//     "__v": 0
// }
