import React from 'react'
import './Banner.css'
import SocialLinks from '@/components/SocialLinks/SocialLinks'
import ButtonLinks from '@/components/ButtonLinks/ButtonLinks'

type Props = {}

export default function Banner({}: Props) {
  return (
    <div className='banner-container'>
      <div className="info-banner">

        <div className="title">
          <h2>Olá! eu sou o Douglas 👨‍💻</h2>
          <h1>Desenvolvedor Fullstack<span className='font-blue-color'>_</span></h1>
        </div>

        <SocialLinks/>

        <ButtonLinks flexColumn={false}/>
      </div>
      <div className="img-container">
        <img className='img-perfil' alt='Imagem de perfil' src={"/photo.jpg"}/>
      </div>
    </div>
  )
}