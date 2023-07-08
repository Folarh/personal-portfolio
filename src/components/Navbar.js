import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" navbar">
      <div className="navbar__logo">
        <span className="logo">Taiwo.</span>
      </div>
      <div className="links">
        <div className="navbar__navigation" id={toggle ? "hidden" : ""}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="btn" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <CloseIcon className="icon" />
          ) : (
            <MenuIcon className="icon-1" />
          )}
        </div>
      </div>
    </div>
  );
}
