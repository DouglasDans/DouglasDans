import React from 'react'
import Container from './Container/Container'

import './Portfolio.css'

import portfolio from "@/json/portfolioIndex.json"
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard/ProjectCard'

type Props = {}

export default function Portfolio({}: Props) {
   return (
      <Container>
         <div className="portfolio-container" id='portfolio'>
            <h2>Meu Portfólio<span className='font-blue-color'>_</span></h2>
            <span>Meus projetos pessoais que eu desenvolvi ao longo dos anos</span>
            <div className="portfolio-card-container">
            {
               portfolio.map((item : any, index) => {
                  return(
                     <ProjectCard key={index} {...item} />
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