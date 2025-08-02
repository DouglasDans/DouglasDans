import TitlePipe from "@/components/ui/title-pipe";
import styles from './index.module.scss';
import ProjectCard from "@/components/portfolio/project-card";
import Button from "@/components/ui/button";
import Link from "next/link";
import { getMainProjects } from "@/actions/portfolio.actions";

export default async function PortfolioHome() {
  const pagesList = await getMainProjects()

  return (
    <section id='habilidades' className={styles.container}>
      <div className={styles.header}>
        <h2><TitlePipe text="Meu Portfólio" /></h2>
        <Link href={"/portfolio"}><Button>Ver Portfólio Completo</Button></Link>
      </div>

      <div className={styles.itemsWrapper}>
        {pagesList?.map((page) => (
          <ProjectCard content={page} key={page.id} />
        ))}
      </div>
    </section>
  )
}