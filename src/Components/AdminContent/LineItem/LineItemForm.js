import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Select from "../../../utils/Select";

import {
  unit,
  status,
  pantTypeOptions,
  shirtTypeOptions,
} from "../../../constant";

const constructObject = (e, d) => {
  if (e.name.includes(".")) {
    const keys = e.name.split(".");
    return {
      ...d,
      [keys[0]]: {
        ...d[keys[0]],
        [keys[1]]: e.value,
      },
    };
  } else {
    const { name, value } = e;
    return { ...d, [name]: value };
  }
};

const LineItemForm = ({
  value,
  isNew,
  itemType,
  onSubmit,
  isShowEditButton,
}) => {
  const type = itemType === "Pant" ? pantTypeOptions : shirtTypeOptions;

  const [data, setData] = useState(value);
  const [isUpdate, setIsUpdate] = useState(isNew);
  const { constants, auth } = useSelector((state) => state);

  const disableByRole = !["admin", "lead-tailor"].includes(
    auth.userDetails?.role
  );

  useEffect(() => {
    setData(value);
  }, [value]);

  const onChange = (e) => {
    setData((d) => {
      const newData = constructObject(e.target, d);
      return newData;
    });
  };

  const formSubmitHandler = () => {
    onSubmit(data, itemType);
    setIsUpdate(false);
  };

  return (
    <div className="row lineitem">
      <div className="col-auto">
        <label className="form-label">Order Number</label>
        <input
          name="orderNumber"
          type="number"
          className="form-control"
          value={data?.orderNumber}
          onChange={onChange}
          disabled
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Type</label>
        <Select
          disabled={!isUpdate || disableByRole}
          onChange={onChange}
          name="type"
          value={data.type}
          className="form-select"
          options={type}
        />
      </div>

      <div className="col-auto">
        <label className="form-label">AssignedTo</label>
        <Select
          disabled={!isUpdate || disableByRole}
          onChange={onChange}
          name="assignedTo"
          value={data?.assignedTo}
          className="form-select"
          options={constants.tailors}
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Quantity</label>
        <input
          disabled={!isUpdate || disableByRole}
          onChange={onChange}
          name="quantity"
          type="number"
          className="form-control"
          value={data?.quantity}
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Status</label>
        <Select
          disabled={isNew || !isUpdate}
          onChange={onChange}
          name="status"
          value={data.status}
          className="form-select"
          options={status}
        />
      </div>

      <div className="col-auto">
        <label className="form-label">Unit</label>
        <Select
          disabled={!isUpdate || disableByRole}
          onChange={onChange}
          name="unitOfMeasurement"
          value={data.unitOfMeasurement}
          className="form-select"
          options={unit}
        />
      </div>

      {data.orderDate && (
        <div className="col-auto">
          <label className="form-label">Ordered Date</label>
          <input
            disabled
            name="orderDate"
            type="date"
            className="form-control"
            defaultValue={data.orderDate.split("T")[0]}
          />
        </div>
      )}

      {data.deliveredDate && (
        <div className="col-auto">
          <label className="form-label">Delivered Date</label>
          <input
            disabled
            name="deliveredDate"
            type="date"
            className="form-control"
            defaultValue={data.deliveredDate.split("T")[0]}
          />
        </div>
      )}

      <div className="row">
        <div className="col">
          <label className="form-label">Description</label>
          <textarea
            disabled={!isUpdate}
            className="form-control"
            value={data.description || "Description"}
            name="description"
          ></textarea>
        </div>
      </div>

      <div className="row">
        <label>Measurements</label>
        {Object.entries(data.measurements).map((el) => {
          return (
            <div className="col-auto" key={el[0]}>
              <label className="form-label">{el[0]}</label>
              <input
                disabled={!isUpdate || disableByRole}
                onChange={onChange}
                name={`measurements.${el[0]}`}
                type="number"
                className="form-control"
                value={el[1]}
              />
            </div>
          );
        })}
      </div>

      {isShowEditButton && (
        <div className="edit-button">
          {isUpdate && !isNew && (
            <button
              className="btn"
              onClick={() => {
                setData(value);
                setIsUpdate(false);
              }}
            >
              Cancel
            </button>
          )}

          {(isUpdate || isNew) && (
            <button onClick={formSubmitHandler} className="btn btn-danger">
              {!isNew ? "Update" : "submit"}
            </button>
          )}
          {!isUpdate && (
            <button
              className="btn btn-primary"
              onClick={() => {
                setIsUpdate(true);
              }}
            >
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LineItemForm;
