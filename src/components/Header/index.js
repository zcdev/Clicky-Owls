import React from "react";
import "./style.css";

function Header(props) {
  return <div className="header">{props.children}</div>;
}

export default Header;
