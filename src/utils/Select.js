import React, { forwardRef } from "react";

const Select = forwardRef((props, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className={props.className ? props.className : "form-select"}
    >
      {props.options.map((element) => {
        return (
          <option key={element.value} {...element}>
            {element.name}
          </option>
        );
      })}
    </select>
  );
});

export default Select;
