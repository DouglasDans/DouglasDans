import React from 'react'
import './Header.css'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="header">
      <h2 className='title-name'><span>{">>"}</span> Douglas Nascimento<span>_</span></h2>

      <nav className='header-nav'>
        <Link href="#habilidades">
          <h4>Minhas Habilidades</h4>
        </Link>
        <Link href="#tecnologias">
          <h4>Minhas Tecnologias</h4>
        </Link>
        <Link href="#portfolio">
          <h4>Meu Portfolio</h4>
        </Link>
      </nav>

    </div>
  )
}