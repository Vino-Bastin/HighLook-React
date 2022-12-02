import React from "react";

// import styles from "./OrderStatus.module.css";

const OrderStatus = ({ status }) => {
  return (
    <div className="main">
      <ul>
        <li>
          <i class="icon uil uil-parcel"></i>
          <div
            className={`processing one ${
              ["ordered", "preparing", "ready", "delivered"].includes(status) &&
              "active"
            }`}
          >
            <p>1</p>
            <i className="uil uil-check"></i>
          </div>
          <p className="text">Ordered</p>
        </li>
        <li>
          <i className=" icon uil uil-process"></i>
          <div
            className={`processing two ${
              ["preparing", "ready", "delivered"].includes(status) && "active"
            }`}
          >
            <p>2</p>
            <i className="uil uil-check"></i>
          </div>
          <p className="text">Processing</p>
        </li>
        <li>
          <i class=" icon uil uil-truck"></i>
          <div
            className={`processing three ${
              ["ready", "delivered"].includes(status) && "active"
            }`}
          >
            <p>3</p>
            <i className="uil uil-check"></i>
          </div>
          <p className="text">Ready to deliver</p>
        </li>
        <li>
          <i class=" icon uil uil-parcel"></i>
          <div
            className={`processing four ${
              ["delivered"].includes(status) && "active"
            }`}
          >
            <p>4</p>
            <i className="uil uil-check"></i>
          </div>
          <p className="text">delivered</p>
        </li>
      </ul>
    </div>
  );
};

export default OrderStatus;
