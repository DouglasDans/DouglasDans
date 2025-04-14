import styles from './index.module.scss'

type Props = {
  icon: string
  text: string
}

export default function HabilidadesCard({ icon, text }: Readonly<Props>) {
  return (
    <div className={styles.card}>
      <span className={`material-symbols-rounded ${styles.icon}`}>{icon}</span>
      <span>{text}</span>
    </div>
  )
}