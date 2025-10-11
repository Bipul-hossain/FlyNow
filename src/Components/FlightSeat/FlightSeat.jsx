import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Sits from "./Sits/Sits";
import { selectedSitContext } from "../../context/Context";
import OrderDetails from "./Sits/OrderDetails/OrderDetails";
import { getSearchToLs } from "../../utilities/localStorage";

const FlightSeat = () => {
  const flight = useLoaderData();
  const { flightSeat, priceList } = flight;
  console.log("Flight seat", flightSeat);
  const price = priceList.find(
    (price) =>
      price.from === getSearchToLs()?.from && price.to === getSearchToLs()?.to
  );

  const { selectedSit, setSelectedSit } = useContext(selectedSitContext);
  const [isDetails, setIsDetails] = useState(false);

  const handleIsDetails = () => {
    console.log("Clicked");
    setIsDetails(!isDetails);
  };

  return (
    <div>
      {!isDetails ? (
        <div className="mt-5">
          <h1 className="text-center text-4xl underline uppercase font-bold text-fuchsia-600">
            Book Your Favourite Sit
          </h1>

          <div className="grid grid-cols-4 gap-10 mt-5 mb-5">
            {flightSeat.map((sit, index) => (
              <Sits
                key={index}
                sit={sit}
                selectedSit={selectedSit}
                setSelectedSit={setSelectedSit}></Sits>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <OrderDetails price={price}></OrderDetails>
        </div>
      )}
      <div>
        <div className="mt-5 flex justify-end">
          <button
            onClick={() => handleIsDetails()}
            disabled={!selectedSit.length ? true : false}
            className="btn btn-secondary">
            {isDetails ? "Seat Select" : "Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSeat;
