import React from "react";

import styles from "./FallBackMessage.module.css";

const FallBackMessage = (props) => {
  return <div className={styles.fall_back_message}>{props.children}</div>;
};

export default FallBackMessage;
