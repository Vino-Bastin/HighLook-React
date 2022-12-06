import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePant } from "../../../Store/reducers/pantsReducers";
import { updateShirt } from "../../../Store/reducers/shirtsReducers";

import { getMyWork } from "../../../Store/reducers/userReducers";

// import styles from "./WorkItems.module.css";

import FallBackMessage from "../../../utils/FallBackMessage";
import LineItemForm from "../LineItem/LineItemForm";

const WorkItems = ({ items, lineItemType, setMyWork }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmitHandler = async (lineItemData, lineItemType) => {
    let response;
    if (lineItemType === "Pant") {
      response = await updatePant(dispatch, auth.JWT, lineItemData);
    }
    if (lineItemType === "Shirt") {
      response = await updateShirt(dispatch, auth.JWT, lineItemData);
    }

    if (response) {
      getMyWork(dispatch, setMyWork, auth.JWT);
    }
  };

  return (
    <>
      {items.length === 0 ? (
        <FallBackMessage>{`You Don't have any ${lineItemType} Work`}</FallBackMessage>
      ) : (
        items.map((item) => {
          return (
            <LineItemForm
              isNew={false}
              value={item}
              key={item._id}
              itemType={lineItemType}
              isShowEditButton={true}
              onSubmit={onSubmitHandler}
            />
          );
        })
      )}
    </>
  );
};

export default WorkItems;
