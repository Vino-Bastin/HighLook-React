import React from "react";
import LineItemInput from "../LineItem/LineItemInput";
import LineItemSelect from "../LineItem/LineItemSelect";

import { orderStatusOptions } from "./../../../constant";

const Order = ({ data, disabled, isNew }) => {
  return (
    <>
      <LineItemInput
        type="text"
        disabled
        defaultValue={data.orderNumber || ""}
        label="Order Number"
        name="orderNumber"
      />
      <LineItemInput
        type="text"
        disabled={disabled}
        defaultValue={data.name}
        label="Name"
        name="name"
      />
      <LineItemInput
        type="number"
        disabled={disabled}
        defaultValue={data.mobileNumber}
        label="Mobile Number"
        name="mobileNumber"
      />
      <LineItemSelect
        disabled={isNew || disabled}
        options={orderStatusOptions}
        defaultValue={data.status}
        label="Status"
        name="status"
      />
      <LineItemInput
        type="date"
        disabled
        defaultValue={
          data.orderDate.split("T")[0] || new Date().toISOString().split("T")[0]
        }
        label="Ordered Date"
        name="orderDate"
      />
      {data.quantity !== 0 && (
        <LineItemInput
          type="number"
          disabled
          defaultValue={data.quantity}
          label="Quantity"
          name="quantity"
        />
      )}
      {data.lineItems?.pants && (
        <LineItemInput
          type="number"
          disabled
          defaultValue={data.lineItems.pants.quantity || 0}
          label="Number of Pants"
        />
      )}
      {data.lineItems?.shirts && (
        <LineItemInput
          type="number"
          disabled
          defaultValue={data.lineItems.shirts.quantity || 0}
          label="Number of Shirts"
        />
      )}
      {data.schoolName && (
        <LineItemInput
          type="text"
          disabled={disabled}
          defaultValue={data.schoolName || ""}
          label="School Name"
          name="schoolName"
        />
      )}
      {data.standard && (
        <LineItemInput
          type="text"
          disabled={disabled}
          defaultValue={data.standard || ""}
          label="Standard"
          name="standard"
        />
      )}
      {data.deliveredDate && (
        <LineItemInput
          type="date"
          disabled
          defaultValue={data.deliveredDate.split("T")[0]}
          label="Delivered Date"
          name="DeliveredDate"
        />
      )}
    </>
  );
};

export default Order;
