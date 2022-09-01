import React from 'react'
import Header from '../../components/Header/Header'
import S from './FacaSuaReserva.module.css'

const FacaSuaReserva = () => {
    return (
        <div>
            <Header />
            <section>
                <form className={S.form}>
                    <div className={S.selectDate}>
                        <h2 className={S.titleForm}>Selecione suas datas</h2>
                        <input className={S.date} type="date" name='date' />
                    </div>
                    <div className={S.containerSelectPattern}>
                        <select className={S.selectPattern} name="select" id=''>
                            <option value="umQuarto" selected>1 Quarto</option>
                            <option value="doisQuartos">2 Quartos</option>
                            <option value="tresQuartos">3 Quartos</option>
                            <option value="quatroQuartos">4 Quartos</option>
                            <option value="cincoQuartos">5 Quartos</option>
                        </select>
                        <select className={S.selectPattern} name="select" id=''>
                            <option value="umAdulto" selected>1 Adulto</option>
                            <option value="doisAdultos">2 Adultos</option>
                            <option value="tresAdultos">3 Adultos</option>
                            <option value="quatroAdultos">4 Adultos</option>
                            <option value="cincoAdultos">5 Adultos</option>
                        </select>
                        <select className={S.selectPattern} name="select" id=''>
                            <option value="umaCrianca" selected>1 Criança</option>
                            <option value="doisCriancas">2 Crianças</option>
                            <option value="tresCriancas">3 Crianças</option>
                            <option value="quatroCriancas">4 Crianças</option>
                            <option value="cincoCriancas">5 Crianças</option>
                        </select>
                        <select className={S.selectPattern} name="select" id=''>
                            <option value="umaCrianca" selected>1 Criança</option>
                            <option value="doisCriancas">2 Crianças</option>
                            <option value="tresCriancas">3 Crianças</option>
                            <option value="quatroCriancas">4 Crianças</option>
                            <option value="cincoCriancas">5 Crianças</option>
                        </select>
                    </div>
                </form >
            </section>
        </div>
    )
}

export default FacaSuaReserva