import React, { useContext } from "react";
import {
  flightDetailsContext,
  selectedSitContext,
  userContext,
} from "../../../../context/Context";
import { getSearchToLs } from "../../../../utilities/localStorage";
import {
  FaUser,
  FaEnvelope,
  FaPlaneDeparture,
  FaChair,
  FaMoneyBill,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router";

const OrderDetails = ({ price }) => {
  const { user } = useContext(userContext);
  const { selectedSit, setSelectedSit } = useContext(selectedSitContext);
  const { detailsFlight } = useContext(flightDetailsContext);
  const navigate = useNavigate();
  //   const { price } = useContext(flightDetailsContext);
  const destination = getSearchToLs();
  const handleOrderConfirm = () => {
    console.log("Clicked.....", price);
    const order = {
      email: user.email,
      flightDetails: {
        flightName: detailsFlight.flightName,
        flightDate: detailsFlight.flightDate,
        flightTime: detailsFlight.flightTime,
        from: destination.from,
        to: destination.to,
        price: price?.price * selectedSit.length,
        flightSeat: selectedSit,
      },
    };
    console.log("Order...", order);
    axios
      .put("http://localhost:3000/api/confirmorder", order)
      .then((response) => {
        alert("Order Confiremed Successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-6 border border-blue-200 mt-10">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
        🛫 Flight Booking Summary
      </h1>

      {/* User Info */}
      <div className="space-y-2 mb-5">
        <div className="flex items-center text-gray-700">
          <FaUser className="text-blue-500 mr-2" />
          <span className="font-medium">Name:</span>
          <span className="ml-2 uppercase">{user.userName}</span>
        </div>

        <div className="flex items-center text-gray-700">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span className="font-medium">Email:</span>
          <span className="ml-2">{user.email}</span>
        </div>
      </div>

      {/* Destination Info */}
      <div className="flex items-center bg-blue-600 text-white p-3 rounded-xl mb-5">
        <FaPlaneDeparture className="mr-3 text-2xl" />
        <div>
          <p className="font-semibold text-lg">{detailsFlight.flightName}</p>
          <p className="font-semibold text-lg">
            {destination.from} ➤ {destination.to}
          </p>
          <p className="text-sm text-white/80">Your chosen flight route</p>
        </div>
      </div>

      {/* Pricing Info */}
      <div className="bg-white rounded-xl p-4 shadow-inner space-y-2 mb-5">
        <div className="flex justify-between text-gray-700">
          <span className="font-medium flex items-center gap-2">
            <FaMoneyBill className="text-green-500" /> Price Per Seat:
          </span>
          <span className="font-semibold text-blue-700">৳ {price?.price}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span className="font-medium">Total Seats:</span>
          <span>{selectedSit.length}</span>
        </div>

        <div className="flex justify-between text-gray-800 border-t pt-2 mt-2">
          <span className="font-bold text-lg">Total Price:</span>
          <span className="text-xl font-bold text-green-600">
            ৳ {price?.price * selectedSit.length}
          </span>
        </div>
      </div>

      {/* Seats List */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-inner">
        <h2 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
          <FaChair /> Selected Seats
        </h2>
        <div className="flex flex-wrap gap-2">
          {selectedSit.map((sits, idx) => (
            <span
              key={idx}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm shadow">
              Seat {sits.seatNumber}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-white">
        <button
          onClick={() => handleOrderConfirm()}
          className="m-4 btn btn-dash bg-amber-400 w-full text">
          Order Confirm
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;

// bookedFlight: [
//     new mongoose.Schema({
//       flightName: String,
//       flightDate: String,
//       flightTime: String,
//       from: String,
//       to: String,
//       price: { type: Number, default: 0 },
//       flightSeat: [Object],
//     }),
//   ]
