import React from "react";
import foto from "../../assets/quarto.jpg";
import C1 from "../../assets/C1.jpg";
import C2 from "../../assets/C2.jpg";
import C3 from "../../assets/C3.jpg";
import C4 from "../../assets/C4.jpg";
import C5 from "../../assets/C5.jpg";
import C6 from "../../assets/C6.jpg";
import C7 from "../../assets/C7.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
const Card = () => {
  return (
    <div className={S.cardContainer}>
      <div className={S.imageContainer}>
        <img src={foto}></img>
      </div>
      <div className={S.swiper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={C1}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={C2}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={C3}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={C4}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={C5}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={C6}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={C7}></img>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={S.cardTitle}>Suas reservas</div>
      <div className={S.cardBody}></div>
    </div>
  );
};

export default Card;
