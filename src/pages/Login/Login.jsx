import React from "react";
import S from "./Login.module.css";
import FormLogin from "../../components/FormLogin/FormLogin";
import videoLogin from "../../assets/login.mp4";

const Login = () => {
  return (
    <div className={S.loginPage}>
      <div className={S.overlay}></div>
      <video src={videoLogin} autoPlay loop muted />
      <div className={S.section2}>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
