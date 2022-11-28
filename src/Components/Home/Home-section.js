import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setMessage } from "./../../Store/message";

import Input from "../../utils/Input";
import Button from "../../utils/Button";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      navigate(`/status/${inputRef.current.value}`);
    } else {
      // dispatch error if user enter invalide order number
      dispatch(
        setMessage({
          isFailed: true,
          isShow: true,
          message: "please provide valide order Number",
        })
      );
    }
  };

  return (
    <div className="home-section">
      <h3>Welcome to Highlook Tailors</h3>
      <h6>Best Place to stitch your dress</h6>
      <h5>Enter your order Number, to Track</h5>
      <form>
        <div className="order-number-input">
          <Input
            ref={inputRef}
            type="number"
            placeholder="Order Number"
            required={true}
          />
          <Button
            type="submit"
            className="btn btn-success"
            onClick={submitHandler}
          >
            Submit
          </Button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Home;
