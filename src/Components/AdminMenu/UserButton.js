import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./UserButton.module.css";

import { logOut } from "../../Store/reducers/authReducers";
import Button from "../../utils/Button";

import LogOut from "./../../Assests/Log Out.png";

const UserButton = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const userLogo = `${
    auth.userDetails.firstName[0] + auth.userDetails.lastName[0]
  }`.toUpperCase();

  const logOutHandler = () => {
    dispatch(logOut(auth.JWT));
  };

  return (
    <NavLink to={"/admin/userDetails"}>
      <div className={styles.user_logo}>
        <div className={styles.profile_image}>{userLogo}</div>
      </div>
      <Button
        onClick={logOutHandler}
        className={`btn ${styles.menu_container} btn-primary " 
        }`}
      >
        <img src={LogOut} alt="Log Out" className={styles.menu_img} />
        <p>Log Out</p>
      </Button>
    </NavLink>
  );
};

export default UserButton;
