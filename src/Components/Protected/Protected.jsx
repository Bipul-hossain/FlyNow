import React, { useContext } from "react";
import { loadingContext, userContext } from "../../context/Context";
import { Navigate, useNavigate } from "react-router";

const Protected = ({ children }) => {
  const { isLoading } = useContext(loadingContext);
  const { user } = useContext(userContext);

  if (isLoading) {
    return <h1>Loading...........</h1>;
  }
  if (!user.userName) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default Protected;
