import React from "react";
import { orderStatusOptions } from "../../../constant";
import Input from "../../../utils/Input";
import Select from "../../../utils/Select";

const OrderForm = ({ orderData, setOrderData, disabled, isNew }) => {
  if (!setOrderData) setOrderData = () => {};

  return (
    <>
      <div className="col-auto">
        <label className="form-label">Order Number</label>
        <Input
          type="number"
          className="form-control"
          value={orderData.orderNumber}
          disabled
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Name</label>
        <Input
          autoFocus
          type="text"
          className="form-control"
          value={orderData.name}
          disabled={disabled}
          onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Mobile Number</label>
        <Input
          type="number"
          className="form-control"
          disabled={disabled}
          value={orderData.mobileNumber}
          onChange={(e) =>
            setOrderData({ ...orderData, mobileNumber: e.target.value })
          }
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Status</label>
        <Select
          options={orderStatusOptions}
          disabled={isNew || disabled}
          value={orderData.status}
          onChange={(e) =>
            setOrderData({ ...orderData, status: e.target.value })
          }
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Ordered Date</label>
        <Input
          className="form-control"
          type="date"
          value={
            orderData.orderDate.split("T")[0] ||
            new Date().toISOString().split("T")[0]
          }
          disabled
        />
      </div>

      {(orderData.schoolName || isNew) && (
        <div className="col-auto">
          <label className="form-label">School Name</label>
          <Input
            type="text"
            className="form-control"
            disabled={disabled}
            value={orderData.schoolName}
            onChange={(e) =>
              setOrderData({ ...orderData, schoolName: e.target.value })
            }
          />
        </div>
      )}

      {(orderData.standard || isNew) && (
        <div className="col-auto">
          <label className="form-label">Standard</label>
          <Input
            type="text"
            className="form-control"
            disabled={disabled}
            value={orderData.standard}
            onChange={(e) =>
              setOrderData({ ...orderData, standard: e.target.value })
            }
          />
        </div>
      )}

      {orderData.quantity !== 0 && (
        <div className="col-auto">
          <label className="form-label">Quantity</label>
          <Input
            type="number"
            className="form-control"
            disabled
            value={orderData.quantity}
          />
        </div>
      )}

      {orderData.lineItems?.pants && (
        <div className="col-auto">
          <label className="form-label">Number of Pants</label>
          <Input
            type="number"
            className="form-control"
            disabled
            value={orderData.lineItems.pants.quantity || 0}
          />
        </div>
      )}

      {orderData.lineItems?.shirts && (
        <div className="col-auto">
          <label className="form-label">Number of Shirts</label>
          <Input
            type="number"
            className="form-control"
            disabled
            value={orderData.lineItems.shirts.quantity || 0}
          />
        </div>
      )}

      {orderData.deliveredDate && (
        <div className="col-auto">
          <label className="form-label">Delivered Date</label>
          <Input
            type="date"
            className="form-control"
            disabled
            value={orderData.deliveredDate.split("T")[0]}
          />
        </div>
      )}
    </>
  );
};

export default OrderForm;
