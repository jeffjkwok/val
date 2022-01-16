import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/images/valorantIcon.png";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <Button onClick={() => navigate("/")}>
        <img src={logo} alt="" className="nav__logo" />
      </Button>
    </div>
  );
}

export default Nav;
