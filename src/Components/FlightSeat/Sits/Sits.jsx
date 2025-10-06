import React from "react";
import { getSearchToLs } from "../../../utilities/localStorage";

const Sits = ({ sit }) => {
  const { seatNumber, price, isBooked } = sit;

  return (
    <div
      className={`relative w-14 h-14 flex flex-col justify-center items-center rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 border 
        ${
          isBooked
            ? "bg-gradient-to-br from-red-600 to-red-500 text-white border-red-700 shadow-md shadow-red-200"
            : "bg-gradient-to-br from-sky-100 to-sky-300 border-sky-400 text-sky-900 hover:shadow-lg hover:shadow-sky-300"
        }`}>
      <span className="text-sm font-bold">{seatNumber}</span>

      {!isBooked && (
        <p className="text-[10px] text-sky-800 font-semibold">
          💰 {price[0]?.price || "—"}৳
        </p>
      )}

      {isBooked && (
        <span className="absolute -top-1 -right-1 bg-white text-red-600 text-[8px] font-bold px-1 py-[1px] rounded-full shadow-sm">
          X
        </span>
      )}
    </div>
  );
};

export default Sits;
