import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewOrder } from "./../../../Store/reducers/newOrder";

import NewLineItem from "./../LineItem/NewLineItem";
import Order from "../Orders/Order";
import Button from "../../../utils/Button";

import {
  newPant,
  pantTypeOptions,
  newShirt,
  shirtTypeOptions,
  newOrder,
} from "../../../constant";

import { buildObject } from "../../../utils/helperFunctions";

const NewOrder = () => {
  const [isNew, setIsNew] = useState(true);
  const [order, setOrder] = useState(newOrder);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (
      await createNewOrder(dispatch, setOrder, auth.JWT, buildObject(event, {}))
    ) {
      setIsNew(false);
    }
  };

  return (
    <div className="container content-new ">
      <h3>New Order</h3>
      <form className="row order" onSubmit={formSubmitHandler}>
        <Order data={order} disabled={!isNew} isNew={true} />
        {isNew && (
          <div className="edit-button">
            <Button className="btn btn-danger" type="submit">
              Submit
            </Button>
          </div>
        )}
      </form>
      {!isNew && (
        <>
          <NewLineItem
            newItemTemplate={newPant}
            typeOptions={pantTypeOptions}
            label="Pant"
            orderNumber={order.orderNumber}
          />
          <NewLineItem
            newItemTemplate={newShirt}
            typeOptions={shirtTypeOptions}
            label="Shirt"
            orderNumber={order.orderNumber}
          />
        </>
      )}
    </div>
  );
};

export default NewOrder;
