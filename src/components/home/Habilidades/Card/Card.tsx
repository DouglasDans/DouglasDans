import React from 'react'
import './Card.css'

type Props = {
   icon: String,
   desc: String
}

export default function Card({icon, desc } : Props) {
   return (
      <div className='card-container card-habilidades'>
         <span className="material-symbols-rounded">{icon}</span>
         <span>{desc}</span>
      </div>
   )
}