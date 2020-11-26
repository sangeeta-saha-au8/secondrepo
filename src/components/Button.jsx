import React from "react";
import "../styles/Button.css";

const Button = ({ value, type = "button", background , onClick}) => (
  <input type={type} style={{ background }} className="button" value={value} onClick={onClick} />
);

export default Button;