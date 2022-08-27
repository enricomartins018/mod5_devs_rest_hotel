import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import S from "./Home.module.css";
const Home = () => {
  return (
    <div className={S.container}>
      {/* <div className={S.header}header</div> */}
      <Header />
      <div className={S.sidenav}>
        <Sidebar />
      </div>
      <div className={S.content}>Main</div>
      <div className={S.footer}>Footer</div>
    </div>
  );

};

export default Home;
