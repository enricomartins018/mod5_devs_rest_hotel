import { ClassNames } from "@emotion/react";
import React from "react";
import S from "./Button.module.css";

const Button = ({ texto, onClick, className, visible }) => {
  if (!visible) {
    return;
  }

  return (
    <button className={className} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Button;
