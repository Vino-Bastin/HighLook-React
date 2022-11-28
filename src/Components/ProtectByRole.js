import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { setMessage } from "../Store/message";

const ProtectByRole = ({ roles }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (!roles.includes(auth.userDetails.role)) {
    dispatch(
      setMessage({
        isShow: true,
        isFailed: true,
        message: "Your don't have access",
      })
    );
  }

  return (
    <>
      {roles.includes(auth.userDetails.role) ? (
        <Outlet />
      ) : (
        <Navigate to={"/admin"} />
      )}
    </>
  );
};

export default ProtectByRole;
