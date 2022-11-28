import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { setMessage } from "../../../Store/message";

import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import Label from "../../../utils/Label";
import Select from "../../../utils/Select";

import { status } from "./../../../constant";

const PaymentFilter = ({ onPaymentFilter }) => {
  const dispatch = useDispatch();

  const orderStatusRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const searchSubmitHandler = () => {
    if (
      !orderStatusRef.current.value ||
      startDateRef.current.value === "" ||
      endDateRef.current.value === ""
    ) {
      dispatch(
        setMessage({
          isShow: true,
          isFailed: true,
          message: "Please Provide at filter condition",
        })
      );

      return;
    }

    onPaymentFilter({
      orderStatus: orderStatusRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
    });
  };

  return (
    <div className="filter container">
      <div className="row ">
        <div className="col">
          <Label className="form-label">Order Number</Label>
          <Select ref={orderStatusRef} options={status} />
        </div>
        <div className="col">
          <Label className="form-label">Start Date</Label>
          <Input type="date" ref={startDateRef} className="form-control col" />
        </div>
        <div className="col">
          <Label className="form-label">End Date</Label>
          <Input type="date" ref={endDateRef} className="form-control col" />
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

export default PaymentFilter;
