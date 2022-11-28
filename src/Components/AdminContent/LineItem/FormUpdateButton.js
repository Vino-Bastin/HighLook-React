import React from "react";
import Button from "../../../utils/Button";

const FormUpdateButton = ({ isUpdate, setIsUpdate, updateStateHandler }) => {
  return (
    <div className="edit-button">
      {isUpdate ? (
        <>
          <Button className="btn" onClick={() => setIsUpdate(false)}>
            Cancel
          </Button>
          <Button className="btn btn-danger" type="submit">
            Update
          </Button>
        </>
      ) : (
        <Button
          className="btn btn-primary"
          type="reset"
          onClick={updateStateHandler}
        >
          Edit
        </Button>
      )}
    </div>
  );
};

export default FormUpdateButton;
