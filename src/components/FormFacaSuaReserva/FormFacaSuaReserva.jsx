import React from "react";
import S from './FormFacaSuaReserva.module.css'

const FacaSuaReserva = () => {
    return (
        <section className={S.section}>
            <form className={S.form}>
                <div className={S.selectDate}>
                    <h2 className={S.titleForm}>Selecione suas datas</h2>
                    <div className={S.dataEntrada}>
                        <label>Data de Check-In</label>
                        <input className={S.inputPattern} type="date" name="date" id="entrada" />
                    </div>
                    <div className={S.dataSaida}>
                        <label>Data de Check-Out</label>
                        <input className={S.inputPattern} type="date" name="date" id="saida" />
                    </div>
                </div>
                <div className={S.containerSelectPattern}>
                    <select className={S.selectPattern} name="select" id="">
                        <option value="quarto">1 Quarto</option>
                        <option value="quarto">2 Quartos</option>
                        <option value="quarto">3 Quartos</option>
                        <option value="quarto">4 Quartos</option>
                        <option value="quarto">5 Quartos</option>
                    </select>
                    <select className={S.selectPattern} name="select" id="">
                        <option value="quantLeitos">1 Leito</option>
                        <option value="quantLeitos">2 Leitos</option>
                        <option value="quantLeitos">3 Leitos</option>
                        <option value="quantLeitos">4 Leitos</option>
                        <option value="quantLeitos">5 Leitos</option>
                    </select>
                    <select className={S.selectPattern} name="select" id="">
                        <option value="quantAdultos">1 Adulto</option>
                        <option value="quantAdultos">2 Adultos</option>
                        <option value="quantAdultos">3 Adultos</option>
                        <option value="quantAdultos">4 Adultos</option>
                        <option value="quantAdultos">5 Adultos</option>
                    </select>
                    <select className={S.selectPattern} name="select" id="">
                        <option value="quantCrian">1 Criança</option>
                        <option value="quantCrian">2 Crianças</option>
                        <option value="quantCrian">3 Crianças</option>
                        <option value="quantCrian">4 Crianças</option>
                        <option value="quantCrian">5 Crianças</option>
                    </select>
                    <div className={S.containerCheckbox}>
                        <input className={S.inputCheckbox} type="checkbox" name="" id="" />
                        <label className={S.labelCheckbox}>Casas e apartamentos inteiros</label>
                    </div>
                    <div className={S.containerCheckbox}>
                        <input className={S.inputCheckbox} type="checkbox" name="" id="" />
                        <label className={S.labelCheckbox}>Vou viajar a trabalho</label>
                    </div>
                    <button className={S.btnEnviarReserva} type="submit" id="enviarReserva" >Reservar Agora</button>
                </div>
            </form>
        </section>
    );
};

export default FacaSuaReserva;
