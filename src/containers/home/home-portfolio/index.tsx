import TitlePipe from "@/components/title-pipe";
import styles from './index.module.scss';
import ProjectCard from "@/components/project-card";
import Button from "@/components/button";
import Link from "next/link";

export default function PortfolioHome() {
  return (
    <section id='habilidades' className={styles.container}>
      <div className={styles.header}>
        <h2><TitlePipe text="Meu Portfólio" /></h2>
        <Link href={"/portfolio"}><Button>Ver Portfólio Completo</Button></Link>
      </div>

      <div className={styles.itemsWrapper}>
        <ProjectCard />
      </div>
    </section>
  )
}