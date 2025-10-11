import React, { useState } from "react";
import { getSearchToLs } from "../../../utilities/localStorage";

const Sits = ({ sit, selectedSit, setSelectedSit }) => {
  const { seatNumber, price, isBooked } = sit;

  const handleSelection = () => {
    console.log("Clicked");
    if (isBooked) {
      alert("Already Booked");
      return;
    }
    if (selectedSit.includes(sit)) {
      const removeSit = selectedSit.filter((sitRemove) => sitRemove !== sit);
      setSelectedSit(removeSit);
      return;
    }
    const addSelection = [...selectedSit, sit];
    setSelectedSit(addSelection);
    console.log("Selected Sit: ", selectedSit);
  };

  return (
    <div
      onClick={() => handleSelection()}
      className={`flex justify-center border border-amber-600 p-5 bg-blue-300 rounded-2xl shadow hover:bg-blue-400 ${
        isBooked && "bg-red-700"
      } ${selectedSit.includes(sit) && "bg-green-700 hover:bg-green-500"} `}>
      <div>
        <h1>SEAT NO: A{seatNumber}</h1>
      </div>
    </div>
  );
};

export default Sits;
