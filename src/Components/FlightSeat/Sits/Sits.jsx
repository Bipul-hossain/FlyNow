import React from "react";
import { getSearchToLs } from "../../../utilities/localStorage";

const Sits = ({ sit }) => {
  const search = getSearchToLs();

  const { seatNumber, price, isBooked } = sit;

  // const destinationSit = price.find(
  //   (perSit) => perSit.from === search.from && perSit.to === search.to
  // );

  return (
    <div>
      <div
        className={`border-4 w-44 h-44 rounded-2xl bg-blue-300 ${
          isBooked && "bg-red-500"
        }`}>
        <h1>Seat No: {seatNumber}</h1>
        {/* <p>Destination From : {price[0].from}</p> */}
        {/* <p>Destination From : {destinationSit.from}</p> */}
        {isBooked && <h2>Already Booked</h2>}
      </div>
    </div>
  );
};

export default Sits;
