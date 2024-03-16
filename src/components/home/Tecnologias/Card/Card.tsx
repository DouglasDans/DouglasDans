import React, { Fragment } from 'react'
import './Card.css'
import Image from 'next/image'

type Props = {
   nome: String,
   estudandoHoje: Boolean,
   nivelHabilidade: String,
   imgName: String
}

export default function Card({ nome, estudandoHoje, nivelHabilidade, imgName}: Props) {
   return (
      <div className='card-tecnologias-container'>
         <div className="tech-logo-container">
            <Image
               src={`/tech-logos/${imgName}`} 
               height={70}
               width={70}
               alt=""/>
         </div>
         <div className="tech-info">
            <h4 className='title'>{nome}</h4>
            {estudandoHoje ? (<span className='estudando'>Atualmente Estudando</span>) : ""}
            <span className='habilidade'>Habilidade: {nivelHabilidade}</span>
         </div>
      </div>
   )
}