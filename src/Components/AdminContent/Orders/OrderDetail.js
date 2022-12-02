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
import LineItem from "../LineItem/LineItem";
import FormUpdateButton from "../LineItem/FormUpdateButton";

import { pantTypeOptions, shirtTypeOptions } from "./../../../constant";

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

  const updateStateHandler = (event) => {
    event.preventDefault();
    setIsUpdate(!isUpdate);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (await updateOrder(dispatch, setOrderData, auth.JWT, orderData)) {
      setIsUpdate(false);
    }
  };

  const onSubmitHandler = async (lineItemData, lineItemType) => {
    let response;
    if (lineItemType === "pant") {
      response = await updatePant(dispatch, auth.JWT, lineItemData);
    }
    if (lineItemType === "shirt") {
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
      <form className="row order" onSubmit={formSubmitHandler}>
        <OrderForm
          disabled={!isUpdate}
          orderData={orderData}
          setOrderData={setOrderData}
          isNew={false}
        />
        {orderData.isActive && (
          <FormUpdateButton
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
            updateStateHandler={updateStateHandler}
          />
        )}
      </form>
      <br />
      {orderData?.lineItems?.pants && (
        <>
          <h3>Pant</h3>
          <LineItem
            data={orderData.lineItems.pants}
            typeOptions={pantTypeOptions}
            onSubmit={onSubmitHandler}
            lineItemType={"pant"}
          />
        </>
      )}
      <br />
      {orderData?.lineItems?.shirts && (
        <>
          <h3>Shirt</h3>
          <LineItem
            data={orderData.lineItems.shirts}
            typeOptions={shirtTypeOptions}
            onSubmit={onSubmitHandler}
            lineItemType={"shirt"}
          />
        </>
      )}
    </div>
  );
};

export default OrderDetail;
