import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsShow } from "./../Store/message";

import styles from "./Message.module.css";

const Message = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsShow(false));
    }, 3000);
  }, [dispatch]);

  const onClickHandler = () => {
    dispatch(setIsShow(false));
  };

  return (
    <div
      className={`${styles.message_container}   ${
        props.isFailed
          ? styles.message_container_failed
          : styles.message_container_success
      }`}
    >
      <p>{props.message}</p>
      <p className={styles.message_close_button} onClick={onClickHandler}>
        X
      </p>
    </div>
  );
};

export default Message;
