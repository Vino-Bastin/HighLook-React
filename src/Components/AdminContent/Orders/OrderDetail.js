import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getOrderDetails,
  updateOrder,
} from "../../../Store/reducers/ordersReducers";
import { updatePant } from "./../../../Store/reducers/pantsReducers";
import { updateShirt } from "../../../Store/reducers/shirtsReducers";

import OrderForm from "./OrderForm";
import UpdateButton from "../LineItem/UpdateButton";
import LineItemForm from "../LineItem/LineItemForm";

const OrderDetail = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const { auth } = useSelector((state) => state);
  const { orderId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getOrderDetails(dispatch, navigate, setOrderData, orderId, auth.JWT);
  }, [orderId, auth.JWT, dispatch, navigate]);

  const formSubmitHandler = async () => {
    if (await updateOrder(dispatch, setOrderData, auth.JWT, orderData)) {
      setIsUpdate(false);
    }
  };

  const onSubmitHandler = async (lineItemData, lineItemType) => {
    let response;
    if (lineItemType === "Pant") {
      response = await updatePant(dispatch, auth.JWT, lineItemData);
    }
    if (lineItemType === "Shirt") {
      response = await updateShirt(dispatch, auth.JWT, lineItemData);
    }

    if (response) {
      getOrderDetails(dispatch, navigate, setOrderData, orderId, auth.JWT);
    }
  };

  if (!orderData) {
    return <></>;
  }

  return (
    <div className="container content-overview">
      <div className="row order">
        <OrderForm
          disabled={!isUpdate}
          orderData={orderData}
          setOrderData={setOrderData}
          isNew={false}
        />
        {orderData.isActive && (
          <UpdateButton
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
            onSubmit={formSubmitHandler}
          />
        )}
      </div>
      <br />
      {orderData?.lineItems?.pants && (
        <>
          <h3>Pant</h3>
          <LineItemForm
            isShowEditButton={orderData.isActive}
            isNew={false}
            itemType="Pant"
            onSubmit={onSubmitHandler}
            value={orderData.lineItems.pants}
          />
        </>
      )}
      <br />
      {orderData?.lineItems?.shirts && (
        <>
          <h3>Shirt</h3>
          <LineItemForm
            isShowEditButton={orderData.isActive}
            isNew={false}
            itemType="Shirt"
            onSubmit={onSubmitHandler}
            value={orderData.lineItems.shirts}
          />
        </>
      )}
    </div>
  );
};

export default OrderDetail;
