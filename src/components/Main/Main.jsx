import React from "react";
import { CarouselServicos } from "../SectionCarouselServicos/CarouselServicos";
import { CarouselSobre } from "../SectionCarouselSobre/CarouselSobre";
import { Caroussel } from "../SectionCaroussel/Caroussel";
import SectionServicos from "../SectionServicos/SectionServicos";
import { SectionSobre } from "../SectionSobre/SectionSobre";
import S from "./Main.module.css";

export const Main = () => {
  return (
    <main className={S.main}>
      <SectionSobre />
      <CarouselSobre />
      <Caroussel />
      <SectionServicos />
      {/* <CarouselServicos /> */}
    </main>
  );
};
