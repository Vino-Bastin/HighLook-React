import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useInputValidator from "../../../Hooks/useInputValidator";

import { setMessage } from "../../../Store/message";
import { updateUserDetails } from "./../../../Store/reducers/userReducers";

import UserForm from "../NewUser/UserForm";

import { errorMessages, validator } from "../NewUser/userValidator";

const UserDetails = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { onChange, userInput, onSubmit, setUserInput } = useInputValidator(
    auth.userDetails,
    validator,
    errorMessages
  );

  const onsubmitHandler = (e) => {
    e.preventDefault();

    const { error, isSuccess } = onSubmit();
    if (isSuccess) {
      dispatch(
        updateUserDetails(
          {
            password: userInput.password,
            confirmPassword: userInput.confirmPassword,
          },
          auth.JWT
        )
      );
    } else {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: error,
        })
      );
      setUserInput(auth.userDetails);
    }
  };

  return (
    <div>
      <h2>{`Welcome ${auth.userDetails.firstName}`}</h2>
      <form
        className="new-user"
        autoComplete="false"
        onSubmit={onsubmitHandler}
      >
        <UserForm onChange={onChange} value={userInput} disabled={true} />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
