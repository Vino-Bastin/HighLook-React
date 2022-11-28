import React from "react";
import logo from "./../../Assests/logo.webp";

const NavLogo = (props) => {
  return (
    <div
      className={props.className ? `${props.className}` : "nav-item-left"}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      <img src={logo} alt="logo" className="nav-logo" />
      <p>Highlook Tailors</p>
    </div>
  );
};

export default NavLogo;
