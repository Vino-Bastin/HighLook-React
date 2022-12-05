import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { signIn, passwordResetMail } from "./../Store/reducers/authReducers";
import { setMessage } from "./../Store/message";

import Navbar from "../Components/Navbar/NavBar";
import Button from "../utils/Button";
import Input from "../utils/Input";
import Label from "./../utils/Label";

const SignIn = () => {
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      emailRef.current.value === "" ||
      !emailRef.current.value.includes("@")
    ) {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: "please provide valid email",
        })
      );
      return;
    }

    if (
      !isPasswordReset &&
      (passwordRef.current.value === "" ||
        `${passwordRef.current.value}`.length <= 8)
    ) {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message:
            "please provide valid password and password must have more than 8 characters",
        })
      );
      return;
    }

    if (!isPasswordReset) {
      dispatch(
        signIn({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
      return;
    }

    if (await passwordResetMail(dispatch, { email: emailRef.current.value })) {
      navigate("/", { replace: true });
    }
  };

  if (auth.authStatus) {
    navigate(location?.state?.from || "/admin");
    return;
  }

  return (
    <div>
      <Navbar />
      <div className="sign-in">
        <div>
          <p>
            {isPasswordReset ? "Reset your password" : "Sign In to HighLook"}
          </p>
          <form>
            <Label className="form-label">Email address</Label>
            <Input
              className="form-control"
              ref={emailRef}
              type="email"
              placeholder="email"
              autoFocus={true}
              required={true}
            />
            {!isPasswordReset && (
              <>
                <Label className="form-label">Password</Label>{" "}
                <Input
                  className="form-control"
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                  required={true}
                />
              </>
            )}
            <Button
              onClick={onSubmit}
              className="btn btn-primary"
              type="submit"
            >
              {isPasswordReset ? "send password reset mail" : "Sign In"}
            </Button>
          </form>
          <Button
            className="btn btn-secondary"
            onClick={() => setIsPasswordReset(!isPasswordReset)}
          >
            {isPasswordReset ? "Back Sign in" : "Reset Password"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
