import React from 'react'
import S  from './Header.module.css'

export const Header = () => {
  return (
    <header>
        <h1>Dev's Rest</h1>
        <nav>
            <a href="#">Sobre nós</a>
            <a href="#">Contato</a>
            <a href="#">Serviços</a>
        </nav>
            <button>Reservar</button>
    </header>
  )
}
