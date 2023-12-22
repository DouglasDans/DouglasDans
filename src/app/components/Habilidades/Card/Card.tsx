import React from 'react'
import './Card.css'

type Props = {
   key: Number,
   icon: String,
   title: String,
   desc: String
 }

export default function Card({ key, icon, title, desc } : Props) {
   return (
      <div className='card-container card-habilidades'>
         <span className="material-symbols-rounded">{icon}</span>
         <h4>{title}</h4>
         <span>{desc}</span>
      </div>
   )
}