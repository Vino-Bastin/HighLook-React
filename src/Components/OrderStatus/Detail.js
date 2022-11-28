import React from "react";

const Detail = (props) => {
  return (
    <div className="col">
      <label style={{ color: "black", fontWeight: "bold" }}>
        {props.label}
      </label>
      <p>{props.data}</p>
    </div>
  );
};

export default Detail;
