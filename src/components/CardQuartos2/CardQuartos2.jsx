import React from "react";
import S from "./CardQuartos2.module.css";
import deluxe from "../../assets/image/aptoDeluxe.jpg";
import prestige from "../../assets/image/prt-listing.png";
import deluxeDouble from "../../assets/image/aptoDeluxeDouble.jpg";
import junior from "../../assets/image/junior-suite.jpg";
import suiteJunior from "../../assets/image/deluxe-junior-suite-4.jpg";
import juniorTerrace from "../../assets/image/junior-suite-terrace.jpg";
import suitePrestige from "../../assets/image/prestige-suite-7.jpg";
import suitePanamby from "../../assets/image/suite-panamby.jpeg";
import grandSuite from "../../assets/image/granSuitesp.jpg";

const CardQuartos2 = () => {
  return (
    <div className={S.containerQuartos2}>
      <div className={S.sectionTextQuartos}>
        <h1 className={S.titleQuarto}> QUARTOS & SUITES</h1>
        <h2 className={S.subTitleQuarto}>
          Decoração exclusiva com vistas espetaculares
        </h2>
        <p className={S.paragrafoQuarto}>
          Com arquitetura de interiores confiada a dois dos mais conceituados
          escritórios brasileiros, o Bick Simonato e o Anastassiadis, que
          criaram um conceito de design exclusivo para cada espaço, o Dev`s Rest
          Hotel possui 141 espaçosos apartamentos – sendo 59 suítes – todos com
          deslumbrantes vistas para o Parque Burle Marx.
        </p>
      </div>

      <div className={S.cardQuarto}>
        <img src={deluxe} className={S.cardImgTop} />

        <h3 className={S.cardTitleQ}>Apartamento Deluxe</h3>
        <p className={S.cardTextQ}>
          Os Apartamentos Deluxe são elegantemente decorados com peças e
          materiais contemporâneos inspirados na natureza.
        </p>
        <p className={S.price}>R$ 2.827,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>

      <div className={S.cardQuarto}>
        <img src={deluxeDouble} className={S.cardImgTop} />

        <h3 className={S.cardTitleQ}>Apartamento Deluxe Double</h3>

        <p className={S.cardTextQ}>
          O Apartamento Deluxe Double Double possui decoração contemporânea
          elegante e suave.
        </p>
        <p className={S.price}>R$ 2.830,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>

      <div className={S.cardQuarto}>
        <img src={prestige} className={S.cardImgTop} />
        <h3 className={S.cardTitleQ}>Apartamento Prestige Terrace</h3>
        <p className={S.cardTextQ}>
          Os Apartamentos Prestige Terrace possuem elegante decoração
          contemporânea.
        </p>
        <p className={S.price}>R$ 3.150,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>

      <div className={S.cardQuarto}>
        <img src={junior} className={S.cardImgTop} />
        <h3 className={S.cardTitleQ}>Suíte Junior</h3>
        <p className={S.cardTextQ}>
          As Suítes Júnior são espaçosas e aconchegantes com elegante decoração
          contemporânea.
        </p>
        <p className={S.price}>R$ 3.551,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>

      <div className={S.cardQuarto}>
        <img src={suiteJunior} className={S.cardImgTop} />
        <h3 className={S.cardTitleQ}>Suíte Júnior Deluxe</h3>
        <p className={S.cardTextQ}>
          As Suítes Júnior Deluxe oferecem o charme de um apartamento privativo,
          com área de estar e quarto principal integrados.
        </p>
        <p className={S.price}>R$ 3.150,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>

      <div className={S.cardQuarto}>
        <img src={juniorTerrace} className={S.cardImgTop} />
        <h3 className={S.cardTitleQ}>Suíte Júnior Deluxe Terrace</h3>
        <p className={S.cardTextQ}>
          A Suíte Júnior Deluxe Terrace oferece o charme de um apartamento
          particular com decoração aconchegante e em grande estilo.
        </p>
        <p className={S.price}>R$ 3.536,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>

      <div className={S.cardQuarto}>
        <img src={suitePrestige} className={S.cardImgTop} />
        <h3 className={S.cardTitleQ}>Suíte Prestige</h3>
        <p className={S.cardTexQ}>
          A Suíte Prestige é banhada por luz natural, possui um espaçoso walk-in
          closet e vista para a piscina externa em 109 m² de elegância.
        </p>
        <p className={S.price}>R$ 6.718,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>
      <div className={S.cardQuarto}>
        <img src={suitePanamby} className={S.cardImgTop} />
        <h3 className={S.cardTitleQ}>Suíte Panamby</h3>
        <p className={S.cardTextQ}>
          Esta magnífica suíte é a segunda maior do Palácio Tangará oferecendo
          214 m² de luxo e sofisticação em acomodação e 30 m² de terraço.
        </p>
        <p className={S.price}>R$ 27.000,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>

      <div className={S.cardQuarto}>
        <img src={grandSuite} className={S.cardImgTop} />
        <h3 className={S.cardTitleQ}>Grand Suíte Rio de Janeiro</h3>
        <p className={S.cardTextQ}>
          A confortável e suntuosa Grande Suíte Rio de Janeiro representa o que
          há de mais luxuoso oferecido pelo Dev`s Rest Hotel.
        </p>
        <p className={S.price}>R$ 38.000,00 / noite</p>
        <button className={S.btnPrice}>RESERVE</button>
      </div>
      <footer className={S.footerQuarto}>
        <div>+ 55 21 0000-0000</div>
        <div>reservas@devsresthotel.com</div>
      </footer>
    </div>
  );
};

export default CardQuartos2;
