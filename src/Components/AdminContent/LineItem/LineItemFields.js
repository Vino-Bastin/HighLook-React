import React from "react";

import { useSelector } from "react-redux";

import LineItemInput from "./LineItemInput";
import LineItemSelect from "./LineItemSelect";
import Measurements from "./Measurements";
import Label from "../../../utils/Label";

import { status, unit } from "./../../../constant";

const LineItemFields = ({ isUpdate, data, typeOptions, isNew }) => {
  const { constants, auth } = useSelector((state) => state);

  const disableByRole = !["admin", "lead-tailor"].includes(
    auth.userDetails?.role
  );

  return (
    <>
      <div className="row">
        <LineItemInput
          type="text"
          disabled
          defaultValue={data.orderNumber || ""}
          label="Order Number"
          name="orderNumber"
        />
        <LineItemInput
          type="text"
          disabled
          defaultValue={data._id}
          label="ID"
          name="_id"
          className={"display-none"}
        />
        <LineItemSelect
          disabled={!isUpdate || disableByRole}
          options={typeOptions}
          defaultValue={data.type || ""}
          label="Type"
          name="type"
        />
        <LineItemSelect
          disabled={!isUpdate || disableByRole}
          options={constants.tailors}
          defaultValue={data.assignedTo || auth.userDetails._id}
          label="Assigned To"
          name="assignedTo"
        />
        <LineItemInput
          type="Number"
          disabled={!isUpdate || disableByRole}
          defaultValue={data.quantity || ""}
          label="Quantity"
          name="quantity"
        />
        <LineItemSelect
          disabled={isNew || !isUpdate}
          options={status}
          defaultValue={data.status || ""}
          label="Status"
          name="status"
        />
        <LineItemSelect
          disabled={!isUpdate || disableByRole}
          options={unit}
          defaultValue={data.unitOfMeasurement || ""}
          label="Unit"
          name="unitOfMeasurment"
        />
        {data.orderDate && (
          <LineItemInput
            type="text"
            disabled
            defaultValue={data.orderDate.split("T")[0]}
            label="Ordered Date"
            name="orderDate"
          />
        )}
      </div>
      <div className="row">
        <div className="col">
          <Label className="form-label">Description</Label>
          <textarea
            defaultValue={data.description || "Description"}
            className="form-control"
            disabled={!isUpdate || disableByRole}
            name="description"
          ></textarea>
        </div>
      </div>
      <Measurements
        measurement={data.measurements}
        disabled={!isUpdate || disableByRole}
      />
    </>
  );
};

export default LineItemFields;
