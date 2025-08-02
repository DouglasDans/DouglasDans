'use client'

import { useState, useEffect } from 'react'
import TitlePipe from '@/components/title-pipe'
import styles from './index.module.scss'
import Button from '@/components/button'
import { getProjectByCategory } from '@/actions/portfolio.actions'
import ProjectCard from '@/components/project-card'
import ProjectCardSkeleton from '@/components/project-card-skeleton'
import { NotionPage } from '@/services/notion/classes/NotionPage'

export default function PortfolioPageContainer() {
  const [projectCategory, setProjectCategory] = useState('all')
  const [projectList, setProjectList] = useState<NotionPage[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)
      const projects = await getProjectByCategory(projectCategory)
      setProjectList(projects)
      setIsLoading(false)
    }

    fetchProjects()
  }, [projectCategory])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1><TitlePipe text="Meu Portfólio" /></h1>

        <div className={styles.buttonsWrapper}>
          <Button
            className={projectCategory === 'all' ? styles.active : ''}
            onClick={() => setProjectCategory('all')}
          >
            Todos
          </Button>
          <Button
            className={projectCategory === 'personal' ? styles.active : ''}
            onClick={() => setProjectCategory('personal')}
          >
            Projetos Pessoais
          </Button>
          <Button
            className={projectCategory === 'academic' ? styles.active : ''}
            onClick={() => setProjectCategory('academic')}
          >
            Projetos Acadêmicos
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className={styles.itemsWrapper}>
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      ) : projectList && projectList.length > 0 ? (
        <div className={styles.itemsWrapper}>
          {projectList.map((project) => (
            <ProjectCard content={project} key={project.id} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>Nenhum projeto encontrado para esta categoria.</p>
        </div>
      )}
    </div>
  )
}