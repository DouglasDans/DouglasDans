import React from 'react'
import Container from './Container/Container'
import Card from './Card/Card'

import './Portfolio.css'

type Props = {}

export default function Portfolio({}: Props) {
   return (
      <Container>
         <div className="portfolio-container" id='portfolio'>
            <h2>Meu Portfólio</h2>
            <span>Meus projetos pessoais, acadêmicos e profissionais em que eu já trabalhei</span>
            <div className="portfolio-card-container">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
            </div>
         </div>
      </Container>

   )
}