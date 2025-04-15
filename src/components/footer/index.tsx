import Link from 'next/link'
import TitlePipe from '../title-pipe'
import styles from './index.module.scss'
import Button from '../button'
import SocialLinksWrapper from '../social-links-wrapper'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}><TitlePipe text="Douglas Nascimento" /></h3>

      <div className={styles.links}>
        <Link href={"#top"}>Voltar ao Topo</Link>
        <Link href={"#sobre-mim"}>Sobre Mim</Link>
        <Link href={"#habilidades"}>Minhas Habilidades</Link>
        <Link href={"#postfolio"}>Meu Portfólio</Link>
      </div>

      <div className={styles.buttonsWrapper}>
        <Link href={"/blog"}>
          <Button size='sm'>Meu Blog</Button>
        </Link>
        <Link href={"/curriculo"}>
          <Button size='sm'>Meu Currículo</Button>
        </Link>
        <Link href={"/portfolio"}>
          <Button size='sm'>Meu Portfólio</Button>
        </Link>
      </div>

      <div className={styles.socialLinks}>
        <SocialLinksWrapper />
      </div>
    </footer>
  )
}