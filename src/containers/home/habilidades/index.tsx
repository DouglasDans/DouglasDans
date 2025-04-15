import TitlePipe from '@/components/title-pipe'
import styles from './index.module.scss'
import HabilidadesCard from '@/components/habilidades-card'

export default function Habilidades() {
  return (
    <section id='habilidades' className={styles.container}>
      <h2><TitlePipe text="Minhas Habilidades" /></h2>

      <div className={styles.itemsWrapper}>
        <HabilidadesCard icon='delete' text='nadjfbsafhd.rjbafjl ' />
      </div>
    </section>
  )
}