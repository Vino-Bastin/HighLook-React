import React from "react";
import Button from "../../../utils/Button";

const UpdateButton = ({ isUpdate, setIsUpdate, onSubmit }) => {
  return (
    <div className="edit-button">
      {isUpdate ? (
        <>
          <Button className="btn" onClick={() => setIsUpdate(false)}>
            Cancel
          </Button>
          <Button className="btn btn-danger" onClick={onSubmit}>
            Update
          </Button>
        </>
      ) : (
        <Button className="btn btn-primary" onClick={() => setIsUpdate(true)}>
          Edit
        </Button>
      )}
    </div>
  );
};

export default UpdateButton;
