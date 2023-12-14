'use client'

import React, { useEffect, useState } from 'react'
import portfolio from "@/json/portfolio.json"

import './ProjectsContainer.css'
import getCategoriaProjetos from '../functions/getCategoriaProjetos'
import ProjectCard from '@/components/Global/ProjectCard/ProjectCard'

type Props = {}

export default function ProjectsContainer({}: Props) {

  const [tabCategoria, setTabCategoria] = useState("pessoal")
  const [itensPortfolio, setItensPortfolio] = useState<Object[]>(getCategoriaProjetos(portfolio, tabCategoria))

  function handleCategoriaButton(event){
    setTabCategoria(event.target.value)
  }

  function updateItensPortfolio(){
    setItensPortfolio(getCategoriaProjetos(portfolio, tabCategoria))
  }

  useEffect(() => {
    updateItensPortfolio();
    console.log(tabCategoria);
    
  }, [tabCategoria])
  

  return (
    <div className='projects-container'>
      <div className="projects-container-header">
        <h4>Meus projetos</h4>

        {/* <div className="tabs-container">
          <button value={"pessoal"} onClick={handleCategoriaButton} className={'project-tab-button' + (tabCategoria == 'pessoal' ? " active" : "")}>Pessoais</button>

          <button value={"profissional"} onClick={handleCategoriaButton} className={'project-tab-button' + (tabCategoria == 'profissional' ? " active" : "")}>Profissionais</button>

          <button value={"academico"} onClick={handleCategoriaButton} className={'project-tab-button' + (tabCategoria == 'academico' ? " active" : "")}>Acadêmicos</button>

          <button value={"experimentacao"} onClick={handleCategoriaButton} className={'project-tab-button' + (tabCategoria == 'experimentacao' ? " active" : "")}>Esperimentações</button>
        </div> */}

      </div>

      <div className="projects-card-container">
            {
               itensPortfolio.map((item, index) => {
                  return(
                     <ProjectCard key={index} {...item} />
                  )
               })
            }
      </div>
    </div>
  )
}