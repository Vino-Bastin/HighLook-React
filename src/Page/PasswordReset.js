import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import useInputValidator from "../Hooks/useInputValidator";

import { setMessage } from "../Store/message";
import { passwordReset } from "../Store/reducers/authReducers";

import Navbar from "../Components/Navbar/NavBar";

import Button from "../utils/Button";
import Input from "../utils/Input";
import Label from "../utils/Label";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validator = {
  email: (data) => {
    return data.email !== "" && data.email.includes("@");
  },
  password: (data) => {
    return data.password !== "" && data.password.length > 8;
  },
  confirmPassword: (data) => {
    return data.confirmPassword === data.password;
  },
};

const errorMessages = {
  email: "Please provide valid email",
  password:
    "Please provide valid password and password must have more than 8 characters",
  confirmPassword: "Password and Confirm Password must be same",
};

const PasswordReset = () => {
  const { userInput, setUserInput, onChange, onSubmit } = useInputValidator(
    initialState,
    validator,
    errorMessages
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const Submit = async (event) => {
    event.preventDefault();

    console.log(userInput);
    const { error, isSuccess } = onSubmit();

    if (!isSuccess) {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: error,
        })
      );
      return;
    }

    if (
      await passwordReset(dispatch, {
        ...userInput,
        passwordResetToken: token,
      })
    ) {
      navigate("/signin", { replace: true });
    } else {
      setUserInput(initialState);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="sign-in">
        <div>
          <p>Enter your new password</p>
          <form>
            <Label className="form-label">Email address</Label>
            <Input
              className="form-control"
              value={userInput.email}
              onChange={onChange}
              type="email"
              name="email"
              placeholder="Email"
              autoFocus={true}
              required={true}
            />
            <Label className="form-label">Password</Label>
            <Input
              className="form-control"
              value={userInput.password}
              onChange={onChange}
              type="password"
              name="password"
              placeholder="Password"
              required={true}
            />
            <Label className="form-label">Confirm Password</Label>
            <Input
              className="form-control"
              value={userInput.confirmPassword}
              onChange={onChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required={true}
            />
            <Button onClick={Submit} className="btn btn-primary" type="submit">
              Reset your password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
