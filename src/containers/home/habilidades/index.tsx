import TitlePipe from '@/components/title-pipe'
import styles from './index.module.scss'
import HabilidadesCard from '@/components/habilidades-card'
import skills from "@/data/skills.json"

export default function Habilidades() {
  return (
    <section id='habilidades' className={styles.container}>
      <h2><TitlePipe text="Minhas Habilidades" /></h2>

      <div className={styles.itemsWrapper}>
        {skills.map((skill, index) => {
          return <HabilidadesCard icon={skill.icon} title={skill.title} text={skill.desc} key={index} />
        })}
      </div>
    </section>
  )
}