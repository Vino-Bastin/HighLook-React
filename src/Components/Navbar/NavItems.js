import React from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";

const NavItems = () => {
  return (
    <div className="nav-item-right">
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/admin">
        <Button>Admin</Button>
      </Link>
      {/* <Button>About</Button> */}
    </div>
  );
};

export default NavItems;
