import React from "react";

import Label from "../../../utils/Label";
import LineItemInput from "./LineItemInput";

const Measurements = (props) => {
  const measurements = Object.entries(props.measurement);

  return (
    <>
      <Label>Measurements</Label>
      <div className="row">
        {measurements.map((element) => {
          return (
            <LineItemInput
              measurement="YES"
              name={element[0]}
              key={element[0]}
              type="number"
              label={element[0]}
              disabled={props.disabled}
              defaultValue={element[1]}
            />
          );
        })}
      </div>
    </>
  );
};

export default Measurements;
