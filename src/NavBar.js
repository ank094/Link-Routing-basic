import { Link } from "react-router-dom";
import React from "react";
import "./index.css";

const NavBar = () => {
  const styleBlock = {
    display: "block"
  };
  return (
    <div style={{ display: "flex" }}>
      <Link className="block" to="/home">
        Home
      </Link>
      <Link style={{ display: "block" }} to="/about">
        About
      </Link>
    </div>
  );
};

export default NavBar;
