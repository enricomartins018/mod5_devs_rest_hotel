import React from "react";
import { useState } from "react";
import { api } from "../../services/api";
import S from './FormFacaSuaReserva.module.css'


const FormFacaSuaReserva = () => {
    const [open, setOpen] = useState(false);
    const [dadosFormReserva, setDadosReserva] = useState({
        quarto: "",
        quantLeitos: "",
        quantAdultos: "",
        quantCrian: "",
        dataEntrada: "",
        dataSaida: "",
    });

    function handleChange(e, nomeDaChave) {
        setDadosReserva({
            ...dadosFormReserva,
            [nomeDaChave]: e.target.value,
        });
        console.log(dadosFormReserva)
    }

    function handleClick(e) {
        e.preventDefault();
        try {
            api.post("/facasuareserva", dadosFormReserva).then((response) => {
                console.log(response);
                if (response.data.id) {
                    localStorage.setItem("id_Hospede", response.hospede.id);
                    setOpen((o) => !o);
                    setTimeout(() => {
                        window.location.href = "home";
                    }, "5000");
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <section className={S.section}>
            <form className={S.form}>
                <div className={S.selectDate}>
                    <h2 className={S.titleForm}>Selecione suas datas</h2>
                    <div className={S.dataEntrada}>
                        <label>Data de Check-In</label>
                        <input className={S.inputPattern} type="date" name="date" id="entrada" value={dadosFormReserva.dataEntrada} onChange={(e) => handleChange(e, 'dataEntrada')} />
                    </div>
                    <div className={S.dataSaida}>
                        <label>Data de Check-Out</label>
                        <input className={S.inputPattern} type="date" name="date" id="saida" value={dadosFormReserva.dataSaida} onChange={(e) => handleChange(e, 'dataSaida')} />
                    </div>
                </div>
                <div className={S.containerSelectPattern}>
                    <select className={S.selectPattern} value={dadosFormReserva.quarto} onChange={(e) => handleChange(e, 'quarto')}>
                        <option>Selecione a quntidade de quartos:</option>
                        <option>1 Quarto</option>
                        <option>2 Quartos</option>
                        <option>3 Quartos</option>
                        <option>4 Quartos</option>
                        <option>5 Quartos</option>
                    </select>
                    <select className={S.selectPattern} value={dadosFormReserva.quantLeitos} onChange={(e) => handleChange(e, 'quantLeitos')}>
                        <option>Selecione a quantidade de leitos:</option>
                        <option>1 Leito</option>
                        <option>2 Leitos</option>
                        <option>3 Leitos</option>
                        <option>4 Leitos</option>
                        <option>5 Leitos</option>
                    </select>
                    <select className={S.selectPattern} value={dadosFormReserva.quantLeitos} onChange={(e) => handleChange(e, 'quantAdultos')}>
                        <option>Selecione a quantidade de adultos:</option>
                        <option>1 Adulto</option>
                        <option>2 Adultos</option>
                        <option>3 Adultos</option>
                        <option>4 Adultos</option>
                        <option>5 Adultos</option>
                    </select>
                    <select className={S.selectPattern} value={dadosFormReserva.quantLeitos} onChange={(e) => handleChange(e, 'quantCrian')}>
                        <option>Selecione a quantidade de crianças:</option>
                        <option>1 Criança</option>
                        <option>2 Crianças</option>
                        <option>3 Crianças</option>
                        <option>4 Crianças</option>
                        <option>5 Crianças</option>
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

export default FormFacaSuaReserva;
