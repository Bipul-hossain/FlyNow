import React from "react";
import { useLoaderData } from "react-router";
import Sits from "./Sits/Sits";

const FlightSeat = () => {
  const flight = useLoaderData();
  const { flightSeat } = flight;

  // প্রতি রোতে 6টা সিট (3 left + 3 right)
  const seatsPerRow = 6;
  const rows = [];
  for (let i = 0; i < flightSeat.length; i += seatsPerRow) {
    rows.push(flightSeat.slice(i, i + seatsPerRow));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-sky-800 mb-8 tracking-wide">
        ✈️ Airplane Seat Booking
      </h1>

      {/* Airplane body */}
      <div className="relative bg-gradient-to-b from-white to-sky-50 rounded-[60px] shadow-2xl p-10 border-8 border-sky-300 w-full max-w-5xl overflow-hidden">
        {/* Plane nose */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-sky-300 rounded-t-full shadow-inner"></div>

        {/* Windows */}
        <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-evenly">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 bg-sky-200 border border-sky-400 rounded-full shadow-inner"></div>
          ))}
        </div>
        <div className="absolute right-6 top-0 bottom-0 flex flex-col justify-evenly">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 bg-sky-200 border border-sky-400 rounded-full shadow-inner"></div>
          ))}
        </div>

        {/* Seats */}
        <div className="flex flex-col gap-4 mt-2">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center items-center gap-8 relative">
              {/* Row label (like A, B, C...) */}
              <span className="absolute left-8 text-gray-500 font-semibold">
                {String.fromCharCode(65 + rowIndex)}
              </span>

              {/* Left side seats */}
              <div className="flex gap-3">
                {row.slice(0, 3).map((seat, index) => (
                  <Sits key={index} sit={seat} />
                ))}
              </div>

              {/* Aisle */}
              <div className="w-14 h-1 bg-gray-200 rounded-full shadow-inner"></div>

              {/* Right side seats */}
              <div className="flex gap-3">
                {row.slice(3, 6).map((seat, index) => (
                  <Sits key={index} sit={seat} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Plane tail */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-sky-400 rounded-b-full shadow-inner mt-4"></div>
      </div>
    </div>
  );
};

export default FlightSeat;
