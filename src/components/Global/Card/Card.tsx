import React from 'react'
import './Card.css'

type Props = {
   children: string | JSX.Element | JSX.Element[] 
   className?: string
 }

export default function Card({ children, className = ""} : Props) {
   return (
      <div className={`cards-container ${className}`}>
         {children}
      </div>
   )
}