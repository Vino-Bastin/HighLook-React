import { setAuthStatus } from "./../auth";
import { setMessage } from "./../message";

import { getAllUsers } from "./userReducers";

import { DOMAIN } from "../../constant";

import { catchAsync, fetchData } from "../../utils/helperFunctions";

export const signIn = (loginCredentials) => {
  return catchAsync(async (dispatch) => {
    const response = await fetchData(
      `${DOMAIN}/login`,
      "POST",
      "",
      loginCredentials
    );

    const data = await response.json();

    if (data.status === "success") {
      dispatch(
        setAuthStatus({
          authStatus: true,
          JWT: data.token,
          userDetails: data.userDetails,
        })
      );
      await getAllUsers(dispatch, data.token);
    } else {
      throw new Error(data.message);
    }
  });
};

export const verifyUserSession = () => {
  return catchAsync(async (dispatch) => {
    const response = await fetchData(`${DOMAIN}/auth`, "POST");
    const data = await response.json();

    if (data.status === "success") {
      dispatch(
        setAuthStatus({
          authStatus: true,
          JWT: data.token,
          userDetails: data.userDetails,
        })
      );
      await getAllUsers(dispatch, data.token);
    }
  });
};

export const logOut = (token) => {
  return catchAsync(async (dispatch) => {
    const response = await fetchData(`${DOMAIN}/logout`, "POST", token);

    const data = await response.json();

    dispatch(
      setAuthStatus({
        authStatus: false,
        JWT: null,
        userDetails: {},
      })
    );

    if (!data.status === "success")
      throw new Error("Something Went Wrong. Logout ");

    dispatch(
      setMessage({
        isFailed: false,
        isShow: true,
        message: "SuccessFully Logout",
      })
    );
  });
};
