import React from "react";
import Swiper from "react-id-swiper";
// import "swiper/css/swiper.css";

import C1 from "../../assets/C1.jpg";
import C2 from "../../assets/C2.jpg";
import C3 from "../../assets/C3.jpg";
import C4 from "../../assets/C4.jpg";
import C5 from "../../assets/C5.jpg";
import C6 from "../../assets/C6.jpg";
import C7 from "../../assets/C7.jpg";

const Carrossel = () => (
  <Swiper>
    <div>
      <img src={C1}></img>
    </div>
    <div>
      <img src={C2}></img>
    </div>
    <div>
      <img src={C3}></img>
    </div>
    <div>
      <img src={C4}></img>
    </div>
    <div>
      <img src={C5}></img>
    </div>
    <div>
      <img src={C6}></img>
    </div>
    <SwiperSlide>
      <img src={C7}></img>
    </SwiperSlide>
  </Swiper>
);

export default Carrossel;

// import C1 from "../../assets/C1.jpg";
// import C2 from "../../assets/C2.jpg";
// import C3 from "../../assets/C3.jpg";
// import C4 from "../../assets/C4.jpg";
// import C5 from "../../assets/C5.jpg";
// import C6 from "../../assets/C6.jpg";
// import C7 from "../../assets/C7.jpg";

{
  /* <SwiperSlide>
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
        </SwiperSlide> */
}
