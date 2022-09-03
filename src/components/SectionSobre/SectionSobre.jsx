import React from "react";
import S from "./SectionSobre.module.css";
import hote1 from "../../assets/image/hotel1.jpeg";
import hotel2 from "../../assets/image/hotel2.jpeg";
export const SectionSobre = () => {
  return (
    <section className={S.section}>
      <h2 className={S.subtitulo}>
        Venha vivenciar uma experiêcia incrivél no Dev's Rest Hotel!
      </h2>
      <p className={S.p}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eos non
        hic iure laudantium earum consequuntur voluptatibus reprehenderit nemo
        similique, eaque delectus odio doloremque sed minima beatae placeat ut
        dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eos non
        hic iure laudantium earum consequuntur voluptatibus reprehenderit nemo
        similique, eaque delectus odio doloremque sed minima beatae placeat ut
        dignissimos!
      </p>

      <div className={S.divImg}>
        <img className={S.img} src={hote1} alt="" />
        <img className={S.img} src={hotel2} alt="" />
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};
