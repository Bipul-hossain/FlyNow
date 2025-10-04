import React from "react";
import { useLoaderData } from "react-router";
import Sits from "./Sits/Sits";

const FlightSeat = () => {
  const flight = useLoaderData();

  const { flightSeat } = flight;
  return (
    <div>
      <h1>Here are Flight Seat and other details.</h1>
      <div className="flex gap-4 flex-wrap">
        {flightSeat.map((sit, index) => (
          <Sits key={index} sit={sit}></Sits>
        ))}
      </div>
    </div>
  );
};

export default FlightSeat;
