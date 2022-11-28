import { DOMAIN } from "../../constant";

import { catchAsync, fetchData } from "./../../utils/helperFunctions";

export const getAllPants = catchAsync(
  async (dispatch, setPants, token, filters, pageNumber) => {
    let URL = `${DOMAIN}/orders/pants`;

    if (pageNumber) {
      URL += `?page=${pageNumber}`;
    }

    if (filters) {
      URL += `&orderNumber=${filters.orderNumber}&startDate=${filters.startDate}&endDate=${filters.endDate}`;
    }

    const response = await fetchData(URL, "GET", token);

    const data = await response.json();

    if (data.status === "success") {
      setPants(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);

export const updatePant = catchAsync(async (dispatch, token, pantData) => {
  const response = await fetchData(
    `${DOMAIN}/orders/${pantData.orderNumber}/pants/${pantData._id}`,
    "PATCH",
    token,
    pantData
  );

  const data = await response.json();

  if (!(data.status === "success")) {
    throw new Error(data.message);
  }
});
