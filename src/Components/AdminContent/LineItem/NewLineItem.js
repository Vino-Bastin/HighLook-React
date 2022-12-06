import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createNewPant,
  createNewShirt,
} from "../../../Store/reducers/newOrder";

import Button from "../../../utils/Button";
import LineItemForm from "./LineItemForm";

const NewLineItem = ({
  newItemTemplate,
  label,
  orderNumber,
  setIsValidOrder,
}) => {
  newItemTemplate.orderNumber = orderNumber;
  const [isNew, setIsNew] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [newItem, setNewItem] = useState(newItemTemplate);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const formSubmitHandler = async (data) => {
    let response = "";

    if (label === "Pant") {
      response = await createNewPant(
        dispatch,
        setNewItem,
        auth.JWT,
        orderNumber,
        data
      );
    }

    if (label === "Shirt") {
      response = await createNewShirt(
        dispatch,
        setNewItem,
        auth.JWT,
        orderNumber,
        data
      );
    }

    if (response) {
      setIsNew(false);
      setIsValidOrder(true);
    }
  };

  return (
    <>
      <div className="new-lineitem">
        <h3>{label || "LintItem"} </h3>
        <Button
          className="btn btn-primary"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          New {label || "item"}
        </Button>
      </div>
      {isShow && (
        <LineItemForm
          onSubmit={formSubmitHandler}
          isNew={true}
          isShowEditButton={isNew}
          itemType={label}
          value={newItem}
        />
      )}
    </>
  );
};

export default NewLineItem;
