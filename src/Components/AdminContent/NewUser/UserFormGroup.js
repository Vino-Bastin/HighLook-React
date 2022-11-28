import React from "react";

import Select from "../../../utils/Select";
import Label from "../../../utils/Label";
import Input from "../../../utils/Input";

const UserFormGroup = ({ data, disabled }) => {
  return (
    // create a new row

    <div className="row">
      {data.map((element) => {
        //create a new label and input

        return (
          // outer div
          <div
            key={element.label}
            className={
              element.className ? element.className : "form-group col-sm"
            }
          >
            <div>
              {/* create a label */}
              <Label
                className={
                  element.labelClassName ? element.labelClassName : "form-label"
                }
              >
                {element.label}
              </Label>

              {/* craete input or select  */}
              {element.type === "select" ? (
                <Select
                  options={element.options}
                  {...element}
                  disabled={disabled}
                  ref={element.ref}
                />
              ) : (
                <Input
                  {...element}
                  className={"form-control"}
                  disabled={disabled}
                  ref={element.ref}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserFormGroup;
