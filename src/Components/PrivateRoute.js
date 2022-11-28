import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const location = useLocation();

  const auth = useSelector((state) => state.auth);

  return (
    <>
      {auth.authStatus ? (
        <Outlet />
      ) : (
        <Navigate to={"/signin"} replace state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoute;
