import React from 'react'
import TitleDecorator from '../title-decorator'
import styles from './index.module.scss'
import Link from 'next/link'

export default function NavbarWebspace() {
  return (
    <nav className={styles.container}>
      <h1><TitleDecorator text='Douglas Nacimento' /></h1>
      <div className={styles.linksWrapper}>
        <Link href={'#'}>Sobre Mim</Link>
        <Link href={'#'}>Habilidades</Link>
        <Link href={'/portfolio'}>Portfólio</Link>
        {/* <Link href={'#'}>Blog</Link> */}
      </div>
    </nav>
  )
}