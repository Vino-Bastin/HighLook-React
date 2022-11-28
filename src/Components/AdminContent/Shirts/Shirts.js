import React from "react";
import { useSelector, useDispatch } from "react-redux";

import useLocalStore from "./../../../Hooks/useLocalStore";

import {
  getAllShirts,
  updateShirt,
} from "../../../Store/reducers/shirtsReducers";

import LineItem from "../LineItem/LineItem";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import FallBackMessage from "../../../utils/FallBackMessage";

import { shirtTypeOptions } from "./../../../constant";

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
              <LineItem
                key={data._id}
                data={data}
                typeOptions={shirtTypeOptions}
                onSubmit={onSubmitHandler}
                lineLtemType={"shirt"}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Shirts;
