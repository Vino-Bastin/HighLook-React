import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../Store/message";

import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import Label from "../../../utils/Label";

const StatisticsFilters = ({ onSearchFilter }) => {
  const dispatch = useDispatch();

  const yearRef = useRef();

  const searchSubmitHandler = () => {
    try {
      if (!yearRef.current.value)
        throw new Error("Please Provide year to get statistics");
      if (
        yearRef.current.value < 2020 ||
        yearRef.current.value > new Date().getFullYear()
      )
        throw new Error(
          `Year Must be Greater than 2020 and less than ${
            new Date().getFullYear() + 1
          }`
        );

      if (yearRef.current.value % 1 !== 0) {
        throw new Error("Decimal value is not allowed");
      }

      onSearchFilter({ year: yearRef.current.value });
    } catch (err) {
      dispatch(
        setMessage({
          isShow: true,
          isFailed: true,
          message: err.message,
        })
      );
    }
  };

  return (
    <div className="filter container">
      <div className="row ">
        <div className="col">
          <Label className="form-label">Year</Label>
          <Input
            type="number"
            ref={yearRef}
            min="2020"
            max="2030"
            step="1"
            className="form-control col"
          />
        </div>
        <div className="col search-btn">
          <Button onClick={searchSubmitHandler} className="btn btn-primary">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsFilters;
