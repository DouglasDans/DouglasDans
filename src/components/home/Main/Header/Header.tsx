import React from 'react'
import Link from 'next/link'

import styles from './Header.module.css'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className={styles.header}>

      <h3 className='title-name'><span className='font-blue-color'>{">>"}</span> Douglas Nascimento<span className='font-blue-color'>_</span></h3>

      <nav className={styles.nav}>
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