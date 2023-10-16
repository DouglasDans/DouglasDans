import React from 'react'
import "./Tecnologias.css"
import Card from './Card/Card'

import tecnologias from '@/json/tecnologias.json'

type Props = {}

export default function Tecnologias({}: Props) {

   const mapTech = tecnologias.map(item => {
      return(
         <div key={item.id}>
            {item.nome}
         </div>
      )
   })


   return (
    <div className='tecnologias-container' id='tecnologias'>
      <h2>Tecnologias<span className='font-blue-color'>_</span></h2>

      {mapTech}
      
    </div>
  )
}