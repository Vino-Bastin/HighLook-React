import { DOMAIN } from "../../constant";

import { catchAsync, fetchData } from "./../../utils/helperFunctions";

export const createNewOrder = catchAsync(
  async (dispatch, setOrder, token, newOrder) => {
    const response = await fetchData(
      `${DOMAIN}/orders`,
      "POST",
      token,
      newOrder
    );

    const data = await response.json();

    if (data.status === "success") {
      setOrder(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);

export const createNewPant = catchAsync(
  async (dispatch, setNewItem, token, orderNumber, newItemData) => {
    const response = await fetchData(
      `${DOMAIN}/orders/${orderNumber}/pants`,
      "POST",
      token,
      newItemData
    );

    const data = await response.json();

    if (data.status === "success") {
      setNewItem(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);

export const createNewShirt = catchAsync(
  async (dispatch, setNewItem, token, orderNumber, newItemData) => {
    const response = await fetchData(
      `${DOMAIN}/orders/${orderNumber}/shirts`,
      "POST",
      token,
      newItemData
    );

    const data = await response.json();

    if (data.status === "success") {
      setNewItem(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);
