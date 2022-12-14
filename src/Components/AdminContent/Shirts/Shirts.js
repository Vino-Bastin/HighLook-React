import React from "react";
import { useSelector, useDispatch } from "react-redux";

import useLocalStore from "./../../../Hooks/useLocalStore";

import {
  getAllShirts,
  updateShirt,
} from "../../../Store/reducers/shirtsReducers";

import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import FallBackMessage from "../../../utils/FallBackMessage";

import LineItemForm from "../LineItem/LineItemForm";

const Shirts = () => {
  const [
    { data, filters, pageNumber },
    { setData, setFilters, setPageNumber },
  ] = useLocalStore(getAllShirts);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmitHandler = async (shirtData) => {
    if (await updateShirt(dispatch, auth.JWT, shirtData)) {
      getAllShirts(dispatch, setData, auth.JWT, filters, pageNumber);
    }
  };

  if (!data) {
    return <></>;
  }

  return (
    <>
      <h3>Shirts</h3>
      <Search onSearchFilter={setFilters} setPageNumber={setPageNumber} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <div className="container content">
        {data.length === 0 ? (
          <FallBackMessage>No shirts Records Found</FallBackMessage>
        ) : (
          data.map((data) => {
            return (
              <LineItemForm
                isShowEditButton={data.isActive}
                onSubmit={onSubmitHandler}
                isNew={false}
                itemType="Shirt"
                value={data}
                key={data._id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Shirts;
