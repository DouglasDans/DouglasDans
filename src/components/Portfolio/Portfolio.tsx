import React from 'react'
import Container from './Container/Container'
import Card from './Card/Card'

import './Portfolio.css'

import portfolio from "@/json/portfolioIndex.json"
import Link from 'next/link'
import ProjectCard from '../Global/ProjectCard/ProjectCard'

type Props = {}

export default function Portfolio({}: Props) {
   return (
      <Container>
         <div className="portfolio-container" id='portfolio'>
            <h2>Meu Portfólio<span className='font-blue-color'>_</span></h2>
            <span>Meus projetos pessoais, acadêmicos e profissionais em que eu já trabalhei</span>
            <div className="portfolio-card-container">
            {
               portfolio.map((item : any) => {
                  return(
                     <ProjectCard key={item.id} {...item} />
                  )
               })
            }
            </div>
            <div className="ver-mais-container">
               <Link href={"/projetos"}><button className='ver-mais-btn'>Ver Mais</button></Link>
            </div>
         </div>
      </Container>

   )
}