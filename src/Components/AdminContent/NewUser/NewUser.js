import React from "react";
import { useDispatch, useSelector } from "react-redux";

import useInputValidator from "../../../Hooks/useInputValidator";

import { createNewUser } from "../../../Store/reducers/userReducers";

import UserForm from "./UserForm";

import { setMessage } from "../../../Store/message";

import { validator, errorMessages, initialState } from "./userValidator";

const NewUser = () => {
  const { onChange, setUserInput, onSubmit, userInput } = useInputValidator(
    initialState,
    validator,
    errorMessages
  );

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { error, isSuccess } = onSubmit();

    if (isSuccess) {
      dispatch(createNewUser(userInput, auth.JWT));
      setUserInput(initialState);
    } else {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: error,
        })
      );
    }
  };

  return (
    <>
      <h3>New User</h3>
      <form
        className="new-user"
        autoComplete="false"
        onSubmit={onSubmitHandler}
      >
        <UserForm
          disabled={false}
          value={userInput}
          onChange={onChange}
          onSubmit={onSubmitHandler}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default NewUser;
