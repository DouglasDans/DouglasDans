import React from 'react'
import Container from './Container/Container'
import Card from './Card/Card'

import './Portfolio.css'

import portfolio from "@/json/portfolio.json"

type Props = {}

export default function Portfolio({}: Props) {
   return (
      <Container>
         <div className="portfolio-container" id='portfolio'>
            <h2>Meu Portfólio<span className='font-blue-color'>_</span></h2>
            <span>Meus projetos pessoais, acadêmicos e profissionais em que eu já trabalhei</span>
            <div className="portfolio-card-container">
            {
               portfolio.map(item => {
                  return(
                     <Card key={item.id} {...item} />
                  )
               })
            }
            </div>
         </div>
      </Container>

   )
}