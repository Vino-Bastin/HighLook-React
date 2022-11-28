import React from "react";
import { useNavigate } from "react-router-dom";

import NavLogo from "./NavLogo";
import NavItems from "./NavItems";

const Navbar = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container nav-bar">
      <NavLogo onClick={onClickHandler} />
      <NavItems />
    </div>
  );
};

export default Navbar;
