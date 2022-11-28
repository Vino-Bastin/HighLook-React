import React from "react";
import Label from "../../../utils/Label";
import Select from "./../../../utils/Select";

const LineItemSelect = (props) => {
  return (
    <div className="col-auto">
      <Label className="form-label">{props.label}</Label>
      <Select {...props} />
    </div>
  );
};

export default LineItemSelect;
