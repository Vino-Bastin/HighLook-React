import React from "react";
import { useSelector, useDispatch } from "react-redux";

import useLocalStore from "../../../Hooks/useLocalStore";

import { getAllPants, updatePant } from "../../../Store/reducers/pantsReducers";

import Search from "../Search/Search";
import LineItem from "../LineItem/LineItem";
import Pagination from "../Pagination/Pagination";
import FallBackMessage from "../../../utils/FallBackMessage";

import { pantTypeOptions } from "./../../../constant";

const Pants = () => {
  const [
    { data, filters, pageNumber },
    { setData, setFilters, setPageNumber },
  ] = useLocalStore(getAllPants);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmitHandler = async (pantData) => {
    if (await updatePant(dispatch, auth.JWT, pantData)) {
      getAllPants(dispatch, setData, auth.JWT, filters, pageNumber);
    }
  };

  if (!data) {
    return <></>;
  }

  return (
    <>
      <h3>Pants</h3>
      <Search onSearchFilter={setFilters} setPageNumber={setPageNumber} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <div className="container content">
        {data.length === 0 ? (
          <FallBackMessage>No Pants Records Found</FallBackMessage>
        ) : (
          data.map((data) => {
            return (
              <LineItem
                key={data._id}
                data={data}
                typeOptions={pantTypeOptions}
                onSubmit={onSubmitHandler}
                lineLtemType={"pant"}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Pants;
