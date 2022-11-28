import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentDetails } from "../../../Store/reducers/userReducers";

import PaymentDetails from "./PaymentDetails";
import PaymentFilter from "./PaymentFilter";

const Payments = () => {
  const [paymentDetails, setPaymentDetails] = useState([]);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const paymentDetailsHandler = (paymentDetailsFilter) => {
    getPaymentDetails(
      dispatch,
      setPaymentDetails,
      auth.JWT,
      paymentDetailsFilter
    );
  };

  return (
    <>
      <h3>Payments</h3>
      <PaymentFilter onPaymentFilter={paymentDetailsHandler} />
      <br></br>
      <div className="container content" style={{ maxHeight: "70vh" }}>
        <PaymentDetails data={paymentDetails} />
      </div>
    </>
  );
};

export default Payments;
