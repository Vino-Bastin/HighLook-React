import React from "react";
import { Outlet } from "react-router-dom";

const AdminContent = () => {
  return (
    <div className="main-content">
      <Outlet />
    </div>
  );
};

export default AdminContent;
