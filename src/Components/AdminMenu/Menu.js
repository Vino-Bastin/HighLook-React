import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Menu.module.css";

import NavLogo from "./../Navbar/NavLogo";
import MenuContent from "./MenuContent";

const Menu = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className={`${styles.menu}`}>
      <NavLogo className={`${styles.menu_logo}`} onClick={onClickHandler} />
      <br />
      <MenuContent />
    </div>
  );
};

export default Menu;
