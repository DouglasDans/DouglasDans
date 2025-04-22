import styles from './index.module.scss'

type Props = {
  icon: string
  title: string
  text: string
}

export default function HabilidadesCard({ icon, text, title }: Readonly<Props>) {
  return (
    <div className={styles.card}>
      <span className={`material-symbols-rounded ${styles.icon}`}>{icon}</span>
      <div className={styles.content}>
        <span>{title}</span>
        <small>{text}</small>
      </div>
    </div>
  )
}