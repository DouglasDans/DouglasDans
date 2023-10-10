import React from 'react'
import './Banner.css'
import Image from 'next/image'
import SocialLinks from '@/components/Global/SocialLinks/SocialLinks'
import ButtonLinks from '@/components/Global/ButtonLinks/ButtonLinks'

type Props = {}

export default function Banner({}: Props) {
  return (
    <div className='banner-container'>
      <div className="info-banner">

        <div className="title">
          <h1>Olá! eu sou o Douglas</h1>
          <h1>Desenvolvedor Fullstack_</h1>
        </div>

        <SocialLinks/>

        <ButtonLinks/>
      </div>
      <div className="img-container">
        <img className='img-perfil' alt='Imagem de perfil' src={"/photo.png"}/>
      </div>
    </div>
  )
}