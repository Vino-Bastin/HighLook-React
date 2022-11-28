import { DOMAIN } from "../../constant";

import { catchAsync, fetchData } from "../../utils/helperFunctions";

export const getAllOrders = catchAsync(
  async (dispatch, setOrders, token, filters, pageNumber) => {
    let URL = `${DOMAIN}/orders/?`;

    if (pageNumber) {
      URL += `page=${pageNumber}&limit=3&populate=true&`;
    }

    if (filters) {
      URL += `orderNumber=${filters.orderNumber}&startDate=${filters.startDate}&endDate=${filters.endDate}`;
    }
    const response = await fetchData(URL, "GET", token);

    const data = await response.json();

    if (data.status === "success") {
      setOrders(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);

export const getOrderDetails = catchAsync(
  async (dispatch, navigate, setOrderData, orderId, token) => {
    const response = await fetch(`${DOMAIN}/orders/${orderId}?populate=true`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const data = await response.json();

    if (data.status === "success") {
      setOrderData(data.data);
    } else {
      navigate("/admin", { replace: true });
      throw new Error(data.message);
    }
  }
);

export const updateOrder = catchAsync(
  async (dispatch, setOrderData, token, orderData) => {
    const response = await fetchData(
      `${DOMAIN}/orders/${orderData.orderNumber}`,
      "PATCH",
      token,
      orderData
    );

    const data = await response.json();

    if (data.status === "success") {
      setOrderData(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);
