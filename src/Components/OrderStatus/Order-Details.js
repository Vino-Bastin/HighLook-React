import React from "react";

import styles from "./Order-Details.module.css";

import Detail from "./Detail";

const OrderDetails = ({ data }) => {
  return (
    <div className={`container ${styles.order_detail_container}`}>
      <div className=" row row-cols-auto ">
        <Detail label="Order Number" data={data.orderNumber} />
        <Detail label="name" data={data.name} />
        <Detail label="Mobile Number" data={data.mobileNumber} />
        <Detail label="Quantity" data={data.quantity} />
        <Detail label="Order Date" data={data.orderDate.split("T")[0]} />
        {data.deliveredDate && (
          <Detail
            label="Delivered Date"
            data={data.deliveredDate.split("T")[0]}
          />
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
