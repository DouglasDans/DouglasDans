import TitlePipe from '@/components/title-pipe'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from '@/components/button'
import { getProjectByCategory } from '@/actions/portfolio.actions'
import ProjectCard from '@/components/project-card'

type Props = {
  projectCategory: string
}

export default async function PortfolioPageContainer({ projectCategory }: Readonly<Props>) {
  console.log(projectCategory);

  const projectList = await getProjectByCategory(projectCategory);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1><TitlePipe text="Meu Portfólio" /></h1>

        <div className={styles.buttonsWrapper}>
          <Link href={"?project-category=all"}>
            <Button className={(projectCategory === "all") ? styles.active : ''}>Todos</Button>
          </Link>
          <Link href={"?project-category=personal"}>
            <Button className={(projectCategory === "personal") ? styles.active : ''}>Projetos Pessoais</Button>
          </Link>
          <Link href={"?project-category=academic"}>
            <Button className={(projectCategory === "academic") ? styles.active : ''}>Projetos Acadêmicos</Button>
          </Link>
        </div>
      </div>

      <div className={styles.itemsWrapper}>
        {projectList?.map((project) => (
          <ProjectCard content={project} key={project.id} />
        ))}
      </div>

    </div>
  )
}