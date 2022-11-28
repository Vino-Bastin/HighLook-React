import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createNewPant,
  createNewShirt,
} from "../../../Store/reducers/newOrder";

import LineItemField from "../LineItem/LineItemFields";
import Button from "../../../utils/Button";

import { buildObject } from "../../../utils/helperFunctions";

const NewLineItem = ({ newItemTemplate, typeOptions, label, orderNumber }) => {
  newItemTemplate.orderNumber = orderNumber;
  const [isNew, setIsNew] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [newItem, setNewItem] = useState(newItemTemplate);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    let response = "";

    if (label === "Pant") {
      response = await createNewPant(
        dispatch,
        setNewItem,
        auth.JWT,
        orderNumber,
        buildObject(event)
      );
    }

    if (label === "Shirt") {
      response = await createNewShirt(
        dispatch,
        setNewItem,
        auth.JWT,
        orderNumber,
        buildObject(event)
      );
    }

    if (response) setIsNew(false);
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
      {isShow ? (
        <form className="row lineitem" onSubmit={formSubmitHandler}>
          <LineItemField
            data={newItem}
            typeOptions={typeOptions}
            isUpdate={isNew}
            isNew
          />
          {isNew ? (
            <div className="edit-button">
              <Button className="btn btn-danger" type="submit">
                Submit
              </Button>
            </div>
          ) : (
            <></>
          )}
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewLineItem;
