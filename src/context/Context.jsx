import React, { createContext, useEffect, useState } from "react";
import { getTokenLs, removeTokenLS } from "../utilities/tokenStore";
import axios from "axios";

export const userContext = createContext();
export const loadingContext = createContext();
export const selectedSitContext = createContext();
export const flightDetailsContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSit, setSelectedSit] = useState([]);
  const [detailsFlight, setDetailsFlight] = useState({});
  const [price, setPrice] = useState({});
  useEffect(() => {
    const token = getTokenLs();
    if (token) {
      axios
        .get("http://localhost:3000/api/users/me", {
          headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            token: token,
          },
        })
        .then(function (response) {
          setUser(response.data);
        })
        .catch(function (error) {
          removeTokenLS();
          console.log(error);
        });
    }
    setIsLoading(false);
  }, []);
  return (
    <flightDetailsContext.Provider
      value={{ detailsFlight, setDetailsFlight, price, setPrice }}>
      <selectedSitContext.Provider value={{ selectedSit, setSelectedSit }}>
        <loadingContext.Provider value={{ isLoading, setIsLoading }}>
          <userContext.Provider value={{ user, setUser }}>
            {children}
          </userContext.Provider>
        </loadingContext.Provider>
      </selectedSitContext.Provider>
    </flightDetailsContext.Provider>
  );
};

export default Context;
