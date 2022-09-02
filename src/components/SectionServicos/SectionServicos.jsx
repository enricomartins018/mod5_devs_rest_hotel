import React from "react";
import S from "./SectionServicos.module.css";
import FotoMassagem from "../../assets/image/FotoMassagem.jpg";
import FotoSpa from "../../assets/image/FotoSpa.jpg";
const SectionServicos = () => {
  return (
    <section className={S.section}>
      <h2>Conheça nossos serviços.</h2>
      <h3>
        Convidamos você a vivenciar maravilhosas experiências de puro
        relaxamento e bem-estar
      </h3>
      <h4>Massagens</h4>
      <ul>
        <li className={S.lista}>Massagem com pedras quentes</li>
        <p>
          O maravilhoso poder das pedras quentes, que atuam diretamente nos
          músculos e articulações, proporciona sensações inesquecíveis de
          bem-estar.
        </p>
        <li className={S.lista}>Bambuterapia</li>
        <p>
          Massagem que proporciona profundo relaxamento, limpeza energética e
          drenagem de toxinas através do uso de barras de bambu de diversos
          tamanhos.
        </p>
        <li className={S.lista}>Argiloterapia</li>
        <p>
          O poder desintoxicante, purificante, clareador de manchas, hidratante
          e rejuvenescedor das argilas em todo o corpo, para os vários tipos de
          pele. Esfopação e massagem complementam esta terapia milenar do
          Ayurveda para o tratamento da pele.
        </p>
      </ul>
      <div className={S.img_div}>
        {/* <img src={FotoMassagem} clasName={S.img} alt="" /> */}
        <img
          src="https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>

      <h4>Day Spa</h4>
      <p>
        Tudo acontece em um lugar que conspira a favor do relaxamento: música
        suave, visual clean em um ambiente silencioso e confortável. Programas
        de puro relaxamento e cuidados com você e seu corpo, inspirados no
        conhecimento milenar da medicina indiana, o Ayurveda. Venha para o
        Dev's Rest e desfrute desta experiência terapêutica inesquecível.
      </p>
      <ul>
        <li className={S.lista}>Esfoliação corporal 
</li>
        <li className={S.lista}>Terapia dos Alongamentos</li>
        <li className={S.lista}>Revitalização facial</li>
        <li className={S.lista}>Banho de imersão com óleos essenciais</li>
      </ul>
      <img className={S.spaImg} src={FotoSpa} alt="" />
    </section>
  );
};

export default SectionServicos;
