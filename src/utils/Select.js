import React from "react";

const Select = React.forwardRef((props, ref) => {
  return (
    <select {...props} ref={ref} className="form-select">
      {props.options.map((element) => {
        return (
          <option key={element.value} value={element.value}>
            {element.name}
          </option>
        );
      })}
    </select>
  );
});

export default Select;
