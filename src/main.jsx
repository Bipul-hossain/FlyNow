import { Children, Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainOutlate from "./Components/MainOutlate/MainOutlate.jsx";
import FlightSeat from "./Components/FlightSeat/FlightSeat.jsx";
import { getSearchToLs } from "./utilities/localStorage.js";
import FlightListAdmin from "./Components/AdminSide/FlightList/FlightListAdmin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainOutlate,
    children: [
      { index: true, Component: App },
      {
        path: "/flightseat/:flightId",
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/api/aroplane/bokked/status/${
              params.flightId
            }?from=${getSearchToLs().from}&to=${getSearchToLs().to}`
          ),
        Component: FlightSeat,
      },
      {
        path: "/admin/all/flight/list",
        loader: () => fetch("http://localhost:3000/api/aroplane"),
        Component: FlightListAdmin,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
