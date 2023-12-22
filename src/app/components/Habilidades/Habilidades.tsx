import React from 'react'
import Card from './Card/Card'

import './Habilidades.css'
import habilidades from "@/json/habilidades.json"

type Props = {}

export default function Habilidades({ } : Props) { 
   
   const mapCards = habilidades.map(item => {
      return(<Card key={item.id} icon={item.icon} title={item.title} desc={item.desc}/>)
   })

   return (
      <div className="habilidades-container" id='habilidades'>
         <h2>Habilidades<span className='font-blue-color'>_</span></h2>

         <div className="cards-container">
            {mapCards}
         </div>
      </div>
   )
}