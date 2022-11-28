import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateUserDetails } from "./../../../Store/reducers/userReducers";

import UserForm from "../NewUser/UserForm";

const UserDetails = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onsubmitHandler = (userData) => {
    dispatch(
      updateUserDetails(
        {
          password: userData.password,
          confirmPassword: userData.confirmPassword,
        },
        auth.JWT
      )
    );
  };

  return (
    <div>
      <h2>{`Welcome ${auth.userDetails.firstName}`}</h2>
      <UserForm
        userData={auth.userDetails}
        onSubmit={onsubmitHandler}
        disabled={true}
      />
    </div>
  );
};

export default UserDetails;
