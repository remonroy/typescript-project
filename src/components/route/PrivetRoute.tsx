import React from "react";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }: any) => {
  const { isAuth } = useSelector((state: any) => state.findUser);
  // const isAuthenticated = false

  return isAuth ? children : <Navigate to="/" />;
};

export default PrivetRoute;
