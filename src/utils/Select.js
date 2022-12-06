import React from "react";

const Select = (props) => {
  return (
    <select {...props} className="form-select">
      {props.options.map((element) => {
        return (
          <option key={element.value} value={element.value}>
            {element.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
