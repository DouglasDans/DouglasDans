import React from 'react'
import './Habilidades.css'
import Card from '../Global/Card/Card'

type Props = {}

export default function Habilidades({ } : Props) {
   return (
      <div className="habilidades-container">
         <h2>Habilidades<span className='font-blue-color'>_</span></h2>

         <div className="cards-container">
            <Card>
               aaa
            </Card>
         </div>
      </div>
   )
}