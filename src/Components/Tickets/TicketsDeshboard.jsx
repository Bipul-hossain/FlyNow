import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/Context";
import axios from "axios";

const TicketsDeshboard = () => {
  const { user } = useContext(userContext);
  const [tickets, setTickets] = useState({});
  const { bookedFlight } = tickets;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/tickets?email=${user.email}`)
      .then((res) => setTickets(res.data[0]));
  }, []);
  return (
    <div className="my-5">
      <div className="p-5 shadow">
        <h1 className="text-2xl font-bold uppercase">Ticket List</h1>
      </div>
      <div>
        {bookedFlight?.map((booked) => (
          <h1>Other</h1>
        ))}
      </div>
    </div>
  );
};

export default TicketsDeshboard;
