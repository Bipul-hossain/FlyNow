import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import List from "./List";

const FlightListAdmin = () => {
  const allFlightData = useLoaderData();
  const { flightName } = allFlightData;
  console.log("All Data", allFlightData);
  return (
    <div className="mt-8">
      {allFlightData.map((flight, index) => (
        <List key={index} flight={flight}></List>
      ))}
    </div>
  );
};

export default FlightListAdmin;
