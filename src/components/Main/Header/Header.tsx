import React from 'react'
import './Header.css'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="header">
      <h2 className='title-name'><span>{">>"}</span> Douglas Nascimento<span>_</span></h2>

      <nav className='header-nav'>
        <a href="#habilidades">
          <h4>Minhas Habilidades</h4>
        </a>
        <a href="#tecnologias">
          <h4>Minhas Tecnologias</h4>
        </a>
        <a href="#portfolio">
          <h4>Meu Portfolio</h4>
        </a>
      </nav>

    </div>
  )
}