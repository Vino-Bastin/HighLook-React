import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePant } from "../../../Store/reducers/pantsReducers";
import { updateShirt } from "../../../Store/reducers/shirtsReducers";

import { getMyWork } from "../../../Store/reducers/userReducers";

// import styles from "./WorkItems.module.css";

import LineItem from "../LineItem/LineItem";
import FallBackMessage from "../../../utils/FallBackMessage";

const WorkItems = ({ items, itemTypeOptions, lineLtemType, setMyWork }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmitHandler = async (lineItemData, lineLtemType) => {
    let response;
    if (lineLtemType === "pant") {
      response = await updatePant(dispatch, auth.JWT, lineItemData);
    }
    if (lineLtemType === "shirt") {
      response = await updateShirt(dispatch, auth.JWT, lineItemData);
    }

    if (response) {
      getMyWork(dispatch, setMyWork, auth.JWT);
    }
  };

  return (
    <>
      {items.length === 0 ? (
        <FallBackMessage>{`You Don't have any ${lineLtemType} Work`}</FallBackMessage>
      ) : (
        items.map((item) => {
          return (
            <LineItem
              data={item}
              typeOptions={itemTypeOptions}
              key={item._id}
              lineLtemType={lineLtemType}
              onSubmit={onSubmitHandler}
            />
          );
        })
      )}
    </>
  );
};

export default WorkItems;
