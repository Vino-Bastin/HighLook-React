import React from "react";
import { useNavigate } from "react-router-dom";

import useLocalStore from "../../../Hooks/useLocalStore";

import { getAllOrders } from "../../../Store/reducers/ordersReducers";

import Search from "../Search/Search";
import Order from "./Order";
import Pagination from "../Pagination/Pagination";
import FallBackMessage from "../../../utils/FallBackMessage";

const Orders = () => {
  const [{ data, pageNumber }, { setFilters, setPageNumber }] =
    useLocalStore(getAllOrders);

  const navigate = useNavigate();

  const clickHandler = function () {
    navigate(`${this}`);
  };

  if (!data) {
    return <></>;
  }

  return (
    <>
      <h3>Orders</h3>
      <Search onSearchFilter={setFilters} setPageNumber={setPageNumber} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <div className="container content">
        {data.length === 0 ? (
          <FallBackMessage>No Orders Record Found</FallBackMessage>
        ) : (
          data.map((order) => {
            return (
              <div
                key={order._id}
                className="row order"
                onClick={clickHandler.bind(order.orderNumber)}
              >
                <Order data={order} disabled isNew={false} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Orders;
