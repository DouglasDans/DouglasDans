import React from 'react'
import TitlePipe from '../title-pipe'
import styles from './index.module.scss'
import Link from 'next/link'

export default function NavbarWebspace() {
  return (
    <nav className={styles.container}>
      <Link href={"/"}>
        <h1><TitlePipe text='Douglas Nacimento' /></h1>
      </Link>
      <div className={styles.linksWrapper}>
        <Link href={'#sobre-mim'}>Sobre Mim</Link>
        <Link href={'#habilidades'}>Habilidades</Link>
        <Link href={'/portfolio'}>Portfólio</Link>
        {/* <Link href={'#'}>Blog</Link> */}
      </div>
    </nav>
  )
}