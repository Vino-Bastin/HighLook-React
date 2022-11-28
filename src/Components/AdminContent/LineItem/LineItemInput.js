import React from "react";

import Label from "./../../../utils/Label";
import Input from "../../../utils/Input";

const LineItemInput = (props) => {
  return (
    <div className={`col-auto ${props.className}`}>
      <Label className="form-label">{props.label}</Label>
      <Input {...props} className="form-control" />
    </div>
  );
};

export default LineItemInput;
