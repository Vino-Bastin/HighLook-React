import { removeUserDetails } from "../Store/auth";
import { setLoadingStatus } from "./../Store/loading";
import { setMessage } from "./../Store/message";

export const catchAsync = (fun) => {
  return async (...inputs) => {
    const dispatch = inputs[0];
    try {
      dispatch(setLoadingStatus({ isLoading: true }));
      await fun(...inputs);

      dispatch(setLoadingStatus({ isLoading: false }));

      return true;
    } catch (err) {
      if (err.message === "Failed to fetch") {
        err.message = "Something Went Wrong , Please try again";
      }
      if (err.message === "Your session got expired please login again") {
        dispatch(removeUserDetails());
      }
      dispatch(setLoadingStatus({ isLoading: false }));
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: err.message,
        })
      );

      return false;
    }
  };
};

export const fetchData = (
  URL,
  method = "GET",
  token = "",
  data = undefined
) => {
  return fetch(URL, {
    method,
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: data && JSON.stringify(data),
  });
};

export const buildObject = (
  event,
  obj = {
    measurements: {},
  }
) => {
  [...event.target].forEach((element) => {
    if (!(element.type === "submit")) {
      if (element.attributes.measurement) {
        obj.measurements[element.name] = element.value;
      } else {
        obj[element.name] = element.value;
      }
    }
  });

  delete obj._id;

  return obj;
};
