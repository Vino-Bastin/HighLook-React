import { catchAsync, fetchData } from "../../utils/helperFunctions";

import { DOMAIN } from "../../constant";

export const getAllShirts = catchAsync(
  async (dispatch, setShirts, token, filters, pageNumber) => {
    let URL = `${DOMAIN}/orders/shirts`;

    if (pageNumber) {
      URL += `?page=${pageNumber}`;
    }

    if (filters) {
      URL += `&orderNumber=${filters.orderNumber}&startDate=${filters.startDate}&endDate=${filters.endDate}`;
    }

    const response = await fetchData(URL, "GET", token);

    const data = await response.json();

    if (data.status === "success") {
      setShirts(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);

export const updateShirt = catchAsync(async (dispatch, token, shirtData) => {
  const response = await fetchData(
    `${DOMAIN}/orders/${shirtData.orderNumber}/shirts/${shirtData._id}`,
    "PATCH",
    token,
    shirtData
  );

  const data = await response.json();

  if (!(data.status === "success")) {
    throw new Error(data.message);
  }
});
