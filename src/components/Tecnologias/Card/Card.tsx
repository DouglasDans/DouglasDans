import React, { Fragment } from 'react'

type Props = {
   nome: String,
   estudandoHoje: Boolean,
   nivelHabilidade: String,
   imgName: String
}

export default function Card({ nome, estudandoHoje, nivelHabilidade, imgName}: Props) {
   return (
      <Fragment>
         <div className="tech-logo-container">
            <img src="/tech-logos/ts.svg" alt="" />
         </div>
      </Fragment>
   )
}