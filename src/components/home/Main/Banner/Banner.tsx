import React from 'react'

import SocialLinks from '@/components/SocialLinks/SocialLinks'
import ButtonLinks from '@/components/ui/ButtonLinks/ButtonLinks'

import styles from './banner.module.css'

type Props = {}

export default function Banner({}: Props) {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.infoBanner}>

        <div className={styles.title}>
          <h2>Olá! eu sou o Douglas 👨‍💻</h2>
          <h1>Desenvolvedor Fullstack<span className='font-blue-color'>_</span></h1>
        </div>

        <SocialLinks/>

        <ButtonLinks flexColumn={false}/>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.imgPerfil} alt='Imagem de perfil' src={"/photo.jpg"}/>
      </div>
    </div>
  )
}