import React from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import S from "./Login.module.css";
import FormLogin from "../../components/FormLogin/FormLogin";
import { Link } from "react-router-dom";
import videoLogin from "../../assets/login.mp4";

const Login = () => {
  return (
    <div className={S.loginPage}>
      <div className={S.overlay}></div>
      <video src={videoLogin} autoPlay loop muted />
      <div className={S.section2}>
        <FormLogin />
        {/* <Link to="/cadastro">Cadastro</Link> */}
      </div>
    </div>
  );
};

export default Login;
