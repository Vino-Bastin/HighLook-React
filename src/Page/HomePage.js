import React from "react";

import Home from "../Components/Home/Home-section";
import NavBar from "../Components/Navbar/NavBar";

const HomeLayout = () => {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default HomeLayout;
