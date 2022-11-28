import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getOrderDetails,
  updateOrder,
} from "../../../Store/reducers/ordersReducers";
import { updatePant } from "./../../../Store/reducers/pantsReducers";
import { updateShirt } from "../../../Store/reducers/shirtsReducers";

import Order from "./Order";
import LineItem from "../LineItem/LineItem";
import FormUpdateButton from "../LineItem/FormUpdateButton";

import { pantTypeOptions, shirtTypeOptions } from "./../../../constant";

import { buildObject } from "../../../utils/helperFunctions";

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
    if (
      await updateOrder(
        dispatch,
        setOrderData,
        auth.JWT,
        buildObject(event, {})
      )
    ) {
      setIsUpdate(false);
    }
  };

  const onSubmitHandler = async (lineItemData, lineLtemType) => {
    let response;
    if (lineLtemType === "pant") {
      response = await updatePant(dispatch, auth.JWT, lineItemData);
    }
    if (lineLtemType === "shirt") {
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
        <Order data={orderData} disabled={!isUpdate} isNew={false} />
        <FormUpdateButton
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          updateStateHandler={updateStateHandler}
        />
      </form>
      <br />
      {orderData?.lineItems?.pants && (
        <>
          <h3>Pant</h3>
          <LineItem
            data={orderData.lineItems.pants}
            typeOptions={pantTypeOptions}
            onSubmit={onSubmitHandler}
            lineLtemType={"pant"}
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
            lineLtemType={"shirt"}
          />
        </>
      )}
    </div>
  );
};

export default OrderDetail;
