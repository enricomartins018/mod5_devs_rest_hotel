import React from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import S from "./Login.module.css";
import FormLogin from "../../components/FormLogin/FormLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className={S.section1}>
        <FormLogin />
        <Link to="/cadastro">Cadastro</Link>
      </section>

      <section className={S.section2}></section>
    </div>
  );
};

export default Login;
