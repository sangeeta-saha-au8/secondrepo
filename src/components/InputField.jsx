import React from "react";
import "../styles/InputField.css";


const InputField = (props) => {
  console.log(props);
  return <input type={props.type} placeholder={props.placeholder} value={props.value} className="InputField" />;
};

export default InputField;