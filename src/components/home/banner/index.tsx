import Image from 'next/image';
import styles from './index.module.scss'

const arrTechs: string[] = ['ts', 'nextjs', 'react', 'node', 'java', 'spring']

export default function Banner() {
  return (
    <section className={styles.container}>

      <div className={styles.info}>
        <h1 className={styles.title}>Olá, eu sou o Douglas 🧑‍💻</h1>
        <h3 className={styles.subtitle}>Desenvolvedor FullStack</h3>

        <div className={styles.techsContainer}>
          {arrTechs.map((item) => {
            return (
              <Image
                src={`/tech-logos/${item}.svg`}
                key={item}
                height={30}
                width={30}
                alt="" />
            )
          })}
        </div>
      </div>

      <div className={styles.image}>
        <Image
          src={'/profile.png'}
          height={350}
          width={350}
          alt='Foto de Perfil'
        />
      </div>
    </section>
  )
}