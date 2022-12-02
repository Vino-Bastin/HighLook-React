import React, { useState } from "react";
import FormUpdateButton from "./FormUpdateButton";
import LineItemFields from "./LineItemFields";

const buildObject = (event) => {
  let obj = {
    measurements: {},
  };
  [...event.target].forEach((element) => {
    if (!(element.type === "submit")) {
      if (element.attributes.measurement) {
        obj.measurements[element.name] = element.value;
      } else {
        obj[element.name] = element.value;
      }
    }
  });
  return obj;
};

const LineItem = ({ data, typeOptions, onSubmit, lineItemType }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const updateStateHandler = (event) => {
    event.preventDefault();
    setIsUpdate(!isUpdate);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsUpdate(false);
    onSubmit(buildObject(event), lineItemType);
  };

  return (
    <form className="row lineitem" onSubmit={formSubmitHandler}>
      <LineItemFields
        isUpdate={isUpdate}
        data={data}
        typeOptions={typeOptions}
      />
      {data.isActive && (
        <FormUpdateButton
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          updateStateHandler={updateStateHandler}
        />
      )}
    </form>
  );
};

export default LineItem;
