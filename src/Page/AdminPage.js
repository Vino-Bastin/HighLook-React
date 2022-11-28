import React from "react";

import AdminContent from "../Components/AdminContent/AdminContent";
import Menu from "../Components/AdminMenu/Menu";

const AdminPage = () => {
  return (
    <div className="admin-container">
      <Menu />
      <AdminContent />
    </div>
  );
};

export default AdminPage;
