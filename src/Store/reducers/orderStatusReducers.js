import { DOMAIN } from "../../constant";

import { catchAsync, fetchData } from "./../../utils/helperFunctions";

export const getOrderStatus = catchAsync(
  async (dispatch, setOrderStatus, orderNumber) => {
    const response = await fetchData(`${DOMAIN}/orders/status/${orderNumber}`);

    const data = await response.json();

    if (data.status === "success") {
      setOrderStatus(data.data);
    } else {
      throw new Error(data.message);
    }
  }
);
