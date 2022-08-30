import React from 'react'
import S from './Footer.module.css'
import image from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <div className={S.footer}>
      <div className={S.container}>
      <img className={S.img} src={image} alt="logo" />
      {/*Aqui vai entrar o formulário*/}
      <div className={S.containerTexto}>
      <p><b>Horário de funcionamento:<br/>Dom à Dom: 24 horas</b></p>
      <p><b>Endereço:<br/>Rua 1, 100, Bairro:Leblon, Rio de Janeiro - RJ Cep 22441-020</b></p>
      <p><b>Contato:<br/>DevsRestHotel@gmail.com<br/>tel:21 00000000</b></p>
      </div>
      </div>
    </div>
  )
}
