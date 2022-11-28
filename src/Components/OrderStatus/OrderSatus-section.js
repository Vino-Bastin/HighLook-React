import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getOrderStatus } from "../../Store/reducers/orderStatusReducers";

import OrderDetails from "./Order-Details";
import OrderStatus from "./OrderStatus";

const OrderSatus = () => {
  const { orderId } = useParams();

  const [orderStatus, setOrderStatus] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fun = async () => {
      if (!(await getOrderStatus(dispatch, setOrderStatus, orderId))) {
        navigate("/", { replace: true });
      }
    };
    fun();
  }, [orderId, dispatch, navigate]);

  if (!orderStatus) return <></>;

  return (
    <div className="tracking-section">
      <OrderStatus status={orderStatus.status} />
      <br />
      <OrderDetails data={orderStatus} />
    </div>
  );
};

export default OrderSatus;
