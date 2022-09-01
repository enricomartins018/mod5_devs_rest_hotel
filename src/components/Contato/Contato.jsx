import React from "react";
import Button from "../Button/Button";
import S from "./Contato.module.css";

export const Contato = () => {
  return (
    <section>
      <p>
        Não encontrou o que precisava? Entre em contato conosco. Sera um prazer
        atender você!
      </p>
      <p>
        Entre em contato conosco através do número <strong>3030-3030</strong>,
        ou se preferir preencha o formulario ao lado. Nossa equipe entrara em
        contato rapidamente para uma melhor experiência conosco.
      </p>

      <div>
        <form>
          <h3>Entre em contato conosco!</h3>
          <label htmlFor="">Nome Completo</label>
          <input type="text" placeholder="Escreva seu nome" />
          <label htmlFor="">E-mail</label>
          <input type="email" name="" id="" placeholder="Digite seu email" />
          <label htmlFor="">Telefone</label>
          <input type="tel" name="" id="" />
          <label htmlFor="">Assunto:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Sobre qual assunto deseja tratar?"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Digite sua mensagem..."
          ></textarea>
          <Button className={S.Button} texto="Enviar" />
        </form>
      </div>
    </section>
  );
};
