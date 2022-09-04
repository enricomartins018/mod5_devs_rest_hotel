import React from 'react'
import { CarouselServicos } from '../SectionCarouselServicos/CarouselServicos'
import { Caroussel } from '../SectionCaroussel/Caroussel'
import SectionServicos from '../SectionServicos/SectionServicos'
// import { CarouselServicos } from '../SectionSobre/Carousel/CarouselServicos'
import  {SectionSobre}  from '../SectionSobre/SectionSobre'
import S from './Main.module.css'

export const Main = () => {
  return (
    <main className={S.main}>
      
        <SectionSobre />
        <Caroussel />
        <SectionServicos />
      <CarouselServicos />
       
    </main>
  )
}
