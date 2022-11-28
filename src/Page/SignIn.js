import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { signIn } from "./../Store/reducers/authReducers";
import { setMessage } from "./../Store/message";

import Navbar from "../Components/Navbar/NavBar";
import Button from "../utils/Button";
import Input from "../utils/Input";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      emailRef.current.value === "" ||
      !`${emailRef.current.value}`.includes("@")
    ) {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: "please provide valide email",
        })
      );
    } else if (
      passwordRef.current.value === "" ||
      `${passwordRef.current.value}`.length < 8
    ) {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message:
            "please provide valide password and password must be greater than equal to 8 characters",
        })
      );
    } else {
      dispatch(
        signIn({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };
  if (auth.authStatus) {
    navigate(location?.state?.from || "/admin");
  } else {
    return (
      <div>
        <Navbar />
        <div className="signin">
          <p>Please Sign In</p>
          <form>
            <Input
              className="form-control"
              ref={emailRef}
              type="email"
              placeholder="email"
              autoFocus={true}
              required={true}
            />
            <Input
              className="form-control"
              ref={passwordRef}
              type="password"
              placeholder="password"
              required={true}
            />
            <Button
              onClick={onSubmit}
              className="btn btn-primary"
              name="sign in"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    );
  }
};

export default SignIn;
