import Link from 'next/link'
import React from 'react'

import './ButtonLinks.css'

type Props = {}

export default function ButtonLinks({}: Props) {
   return (
      <div className="button-links-container row">
         <Link href={"/"}>
            <button className='btn-link'>Meu Portfólio</button>
         </Link>
         <Link href={"/"}>
            <button className='btn-link'>Meu Currículo</button>
         </Link>
      </div>
   )
}