import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./MenuButton.module.css";

import Button from "../../utils/Button";

const MenuButton = ({ path, buttonName, img }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={`/admin/${path}`}
      className={(isActive) => (isActive ? "btn-primary" : "")}
    >
      <Button
        className={`btn ${styles.menu_container} ${
          pathname.includes(path) ? "btn-primary" : ""
        }`}
      >
        <img src={img} alt={buttonName} className={styles.menu_img} />
        <p>{buttonName}</p>
      </Button>
    </NavLink>
  );
};

export default MenuButton;
