import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar/NavBar";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="error">
        <h3>404 Not Found</h3>
        <h3>{`${window.location.pathname} was Not Found. Redirecting to homme page `}</h3>
      </div>
    </div>
  );
};

export default ErrorPage;
