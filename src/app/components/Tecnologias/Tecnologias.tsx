import React from 'react'
import "./Tecnologias.css"
import Card from './Card/Card'

import tecnologias from '@/json/tecnologias.json'

type Props = {}

export default function Tecnologias({}: Props) {

   const mapTech = tecnologias.map(item => {
      return(
         <Card key={item.id} nome={item.nome} estudandoHoje={item.estudandoHoje} nivelHabilidade={item.nivelHabilidade} imgName={item.imgName}/>
      )
   })

   return (
    <div className='tecnologias-container' id='tecnologias'>
      <h2>Minhas Principais Tecnologias<span className='font-blue-color'>_</span></h2>

      <div className="cards-container">
         {mapTech}
      </div>
    </div>
  )
}