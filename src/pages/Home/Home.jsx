import React from "react";
import { Main } from "../../components/Main/Main";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";

import S from "./Home.module.css";
const Home = () => {
  return (
    <div className={S.container}>
      <Header />
      <div className={S.sideNav}>
        <Sidebar />
      </div>
      <div className={S.content}>
        <Main />
      </div>

      {/* <div className={S.content}>Main</div> */}
      <div className={S.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
