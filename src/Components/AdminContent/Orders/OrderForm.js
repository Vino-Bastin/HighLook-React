import React from "react";

import Select from "../../../utils/Select";

import { orderStatusOptions } from "../../../constant";

const OrderForm = ({ orderData, setOrderData, disabled, isNew }) => {
  if (!setOrderData) setOrderData = () => {};

  const onChange = (e) => {
    e = e.target;
    setOrderData((data) => {
      return { ...data, [e.name]: e.value };
    });
  };

  return (
    <>
      <div className="col-auto">
        <label className="form-label">Order Number</label>
        <input
          name="orderNumber"
          type="number"
          className="form-control"
          defaultValue={orderData.orderNumber}
          disabled
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Name</label>
        <input
          name="name"
          autoFocus
          type="text"
          className="form-control"
          value={orderData.name}
          disabled={disabled}
          onChange={onChange}
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Mobile Number</label>
        <input
          name="mobileNumber"
          type="number"
          className="form-control"
          disabled={disabled}
          value={orderData.mobileNumber}
          onChange={onChange}
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Status</label>
        <Select
          name="status"
          options={orderStatusOptions}
          disabled={isNew || disabled || orderData.status !== "ready"}
          value={orderData.status}
          onChange={onChange}
        />
      </div>

      {(orderData.schoolName || isNew) && (
        <div className="col-auto">
          <label className="form-label">School Name</label>
          <input
            name="schoolName"
            type="text"
            className="form-control"
            disabled={disabled}
            value={orderData.schoolName}
            onChange={onChange}
          />
        </div>
      )}

      {(orderData.standard || isNew) && (
        <div className="col-auto">
          <label className="form-label">Standard</label>
          <input
            name="standard"
            type="text"
            className="form-control"
            disabled={disabled}
            value={orderData.standard}
            onChange={onChange}
          />
        </div>
      )}

      {orderData.quantity !== 0 && (
        <div className="col-auto">
          <label className="form-label">Quantity</label>
          <input
            name="quantity"
            type="number"
            className="form-control"
            disabled
            defaultValue={orderData.quantity}
          />
        </div>
      )}

      {orderData.lineItems?.pants && (
        <div className="col-auto">
          <label className="form-label">Number of Pants</label>
          <input
            type="number"
            className="form-control"
            disabled
            defaultValue={orderData.lineItems.pants.quantity || 0}
          />
        </div>
      )}

      {orderData.lineItems?.shirts && (
        <div className="col-auto">
          <label className="form-label">Number of Shirts</label>
          <input
            type="number"
            className="form-control"
            disabled
            defaultValue={orderData.lineItems.shirts.quantity || 0}
          />
        </div>
      )}

      <div className="col-auto">
        <label className="form-label">Ordered Date</label>
        <input
          name="orderDate"
          className="form-control"
          type="date"
          value={
            orderData.orderDate.split("T")[0] ||
            new Date().toISOString().split("T")[0]
          }
          disabled
        />
      </div>

      {orderData.deliveredDate && (
        <div className="col-auto">
          <label className="form-label">Delivered Date</label>
          <input
            name="deliveredDate"
            type="date"
            className="form-control"
            disabled
            defaultValue={orderData.deliveredDate.split("T")[0]}
          />
        </div>
      )}
    </>
  );
};

export default OrderForm;
