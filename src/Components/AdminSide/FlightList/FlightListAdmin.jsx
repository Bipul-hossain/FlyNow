import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import List from "./List";

const FlightListAdmin = () => {
  const allFlightData = useLoaderData();
  const { flightName } = allFlightData;
  console.log("All Data", allFlightData);
  return (
    <div className="mt-8">
      <div className=" rounded-2xl p-5 mb-4 shadow-lg flex justify-between">
        <h1 className="uppercase text-2xl font-bold">List Of all Flight</h1>
        <Link to="/admin/all/flight/post">
          <button className="btn btn-primary uppercase">
            Create New Flight Shedule
          </button>
        </Link>
      </div>
      {allFlightData.map((flight, index) => (
        <List key={index} flight={flight}></List>
      ))}
    </div>
  );
};

export default FlightListAdmin;
