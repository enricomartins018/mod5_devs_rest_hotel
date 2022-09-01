
import React from 'react'
import S from "./Button.module.css";

const Button = ({texto, onClick, className}) => {
  return (
    <button className={className} onClick={onClick}>{texto}</button>
  )
}

export default Button;
