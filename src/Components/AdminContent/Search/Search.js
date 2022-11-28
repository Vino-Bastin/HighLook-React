import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { setMessage } from "./../../../Store/message";

import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import Label from "../../../utils/Label";

const Search = ({ onSearchFilter, setPageNumber }) => {
  const dispatch = useDispatch();

  const orderNumberRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const searchSubmitHandler = () => {
    if (
      !orderNumberRef.current.value &&
      startDateRef.current.value === "" &&
      endDateRef.current.value === ""
    ) {
      dispatch(
        setMessage({
          isShow: true,
          isFailed: true,
          message: "Please Provide at least one filter",
        })
      );

      return;
    }
    setPageNumber(1);
    onSearchFilter({
      orderNumber: orderNumberRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
    });
  };

  const onFilterClearHandler = () => {
    orderNumberRef.current.value = "";
    startDateRef.current.value = "";
    endDateRef.current.value = "";

    onSearchFilter(null);
    setPageNumber(1);
  };

  return (
    <div className="filter container">
      <div className="row ">
        <div className="col">
          <Label className="form-label">Order Number</Label>
          <Input
            ref={orderNumberRef}
            type="number"
            className="form-control col"
          />
        </div>
        <div className="col">
          <Label className="form-label">Start Date</Label>
          <Input type="date" ref={startDateRef} className="form-control col" />
        </div>
        <div className="col">
          <Label className="form-label">End Date</Label>
          <Input type="date" ref={endDateRef} className="form-control col" />
        </div>
        <div className="col col search-btn">
          <Button className="btn" onClick={onFilterClearHandler}>
            Clear
          </Button>
          <Button onClick={searchSubmitHandler} className="btn btn-primary">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Search;
