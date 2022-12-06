import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMessage } from "../../../Store/message";
import { createNewOrder } from "../../../Store/reducers/newOrder";

import OrderForm from "../Orders/OrderForm";
import NewLineItem from "./../LineItem/NewLineItem";
import Button from "../../../utils/Button";

import { newPant, newShirt, newOrder } from "../../../constant";

const NewOrder = () => {
  const [isNew, setIsNew] = useState(true);
  const [order, setOrder] = useState(newOrder);
  const [isValidOrder, setIsValidOrder] = useState(false);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const formSubmitHandler = async () => {
    if (order.name.length <= 2) {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: `Please Provide a valid Customer Name`,
        })
      );

      return;
    }

    if (`${order.mobileNumber}`.length !== 10) {
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: `Please Provide a valid Customer Mobile Name`,
        })
      );

      return;
    }

    if (await createNewOrder(dispatch, setOrder, auth.JWT, order)) {
      setIsNew(false);
    }
  };

  const onCompleteOrderHandler = () => {
    setOrder(newOrder);
    setIsValidOrder(false);
    setIsNew(true);
    dispatch(
      setMessage({
        isFailed: false,
        isShow: true,
        message: `New Order was created with ${order.orderNumber}`,
      })
    );
  };

  return (
    <div className="container content-new ">
      <h3>New Order</h3>
      <div className="row order">
        <OrderForm
          orderData={order}
          setOrderData={setOrder}
          isNew={true}
          disabled={!isNew}
        />
        {isNew && (
          <div className="edit-button">
            <Button className="btn btn-danger" onClick={formSubmitHandler}>
              Submit
            </Button>
          </div>
        )}
      </div>

      {!isNew && (
        <>
          <NewLineItem
            newItemTemplate={newPant}
            label="Pant"
            orderNumber={order.orderNumber}
            setIsValidOrder={setIsValidOrder}
          />
          <NewLineItem
            newItemTemplate={newShirt}
            label="Shirt"
            orderNumber={order.orderNumber}
            setIsValidOrder={setIsValidOrder}
          />
        </>
      )}

      {isValidOrder && (
        <>
          <div className="order-complete">
            <Button
              onClick={onCompleteOrderHandler}
              className="btn btn-success"
            >
              Click To Complete Order
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewOrder;
