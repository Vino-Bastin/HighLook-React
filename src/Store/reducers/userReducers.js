import { setMessage } from "../message";
import { setAuthStatus } from "../auth";
import { setTailors } from "../constants";

import { DOMAIN } from "../../constant";

import { catchAsync, fetchData } from "../../utils/helperFunctions";

export const createNewUser = (userData, token) => {
  return catchAsync(async (dispatch) => {
    const response = await fetchData(
      `${DOMAIN}/signup`,
      "POST",
      token,
      userData
    );

    const data = await response.json();

    if (data.status === "success") {
      dispatch(
        setMessage({ isShow: true, isFailed: false, message: data.message })
      );
    } else {
      throw new Error(data.message);
    }
  });
};

export const updateUserDetails = (userData, token) => {
  return catchAsync(async (dispatch) => {
    const response = await fetchData(
      `${DOMAIN}/user`,
      "PATCH",
      token,
      userData
    );

    const data = await response.json();

    if (data.status === "success") {
      dispatch(
        setMessage({ isShow: true, isFailed: false, message: data.message })
      );
      dispatch(
        setAuthStatus({
          authStatus: false,
          JWT: null,
          userDetails: {},
        })
      );
    } else {
      throw new Error(data.message);
    }
  });
};

export const getAllUsers = catchAsync(async (dispatch, token) => {
  const response = await fetchData(`${DOMAIN}/user`, "GET", token);

  const data = await response.json();

  if (data.status === "success") {
    dispatch(setTailors({ tailors: data.data }));
  } else {
    throw new Error(data.message);
  }
});

export const getMyWork = catchAsync(
  async (dispatch, setMyWork, token, filters, pageNumber) => {
    let URL = `${DOMAIN}/my-work?`;

    if (pageNumber) {
      URL += `page=${pageNumber}&`;
    }

    if (filters) {
      URL += `orderNumber=${filters.orderNumber}&startDate=${filters.startDate}&endDate=${filters.endDate}`;
    }

    const response = await fetchData(URL, "GET", token);

    const data = await response.json();

    if (data.status === "success") {
      setMyWork(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);

export const getPaymentDetails = catchAsync(
  async (dispatch, setPaymentDetails, token, paymentDetailsFilter) => {
    let URL = `${DOMAIN}/payments`;
    if (paymentDetailsFilter) {
      URL += `?orderStatus=${paymentDetailsFilter.orderStatus}&startDate=${paymentDetailsFilter.startDate}&endDate=${paymentDetailsFilter.endDate}`;
    }

    const response = await fetchData(URL, "GET", token);

    const data = await response.json();

    if (data.status === "success") {
      setPaymentDetails(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);

export const getStatistics = catchAsync(
  async (dispatch, setData, token, filters) => {
    const URL = `${DOMAIN}/statistics?year=${filters.year}`;

    const response = await fetchData(URL, "GET", token);

    const data = await response.json();
    if (data.status === "success") {
      setData(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);
