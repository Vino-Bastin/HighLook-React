import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewUser } from "../../../Store/reducers/userReducers";

import UserForm from "./UserForm";

const NewUser = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmitHander = (newUserData) => {
    // sending a request to api to create a new user
    dispatch(createNewUser(newUserData, auth.JWT));
  };

  return (
    <>
      <h3>New User</h3>
      <UserForm userData={{}} onSubmit={onSubmitHander} />
    </>
  );
};

export default NewUser;
