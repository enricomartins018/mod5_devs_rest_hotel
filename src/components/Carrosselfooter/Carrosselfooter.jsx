import React from "react";
import Carousel from "react-material-ui-carousel";
import S from "./Carrossel.module.css";

export const Carrossel = (props) => {
  var items = [
    { name: "Você merece um descanso!" },
    { name: "Colecione bons momentos com a gente!" },
    { name: "Às vezes um descanso é a melhor forma de ser produtivo!" },
    { name: "Depois que você vir, difícil vai ser não querer voltar!" },
    { name: "Keep Calm e venha se hospedar!" },
    { name: "Dev´s Rest Hotel" },
  ];

  return (
    <Carousel className={S.carrossel}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return <p>{props.item.name}</p>;
}
