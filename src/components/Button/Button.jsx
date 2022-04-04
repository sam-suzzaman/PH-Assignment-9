import React from "react";
import "./Button.css";

const Button = (props) => {
    return <button className="books-shop-btn">{props.btnName}</button>;
};

export default Button;
