import Link from 'next/link'
import React from 'react'

import './ButtonLinks.css'

type Props = {
   flexColumn: Boolean
}

export default function ButtonLinks({flexColumn}: Props) {
   return (
      <div className={"button-links-container " + (flexColumn ? "column" : "row")}>
         <Link href={"/#portfolio"}>
            <button className='btn-link'>Meu Portfólio</button>
         </Link>
         <Link target="_blank" href={"/cv.pdf"}>
            <button className='btn-link'>Meu Currículo</button>
         </Link>
      </div>
   )
}