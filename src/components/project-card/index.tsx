
import Image from 'next/image'
import styles from './index.module.scss'
import Button from '../button'

type Props = {}

export default function ProjectCard({ }: Props) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.coverImage}
        src={"/portfolio-img/wikiflix.png"}
        width={640}
        height={360}
        alt=''
      />

      <div className={styles.content}>
        <h3>Wikiflix</h3>

        <small className={styles.description}>Wikiflix é um projeto que utiliza React.JS e dados da TMDB API para exibir informações de filmes e séries em uma interface bonita e intuitiva.</small>

        <div className={styles.buttonWrapper}>
          <Button size='sm'>Mais Informações</Button>
          <Button
            size='sm'
            startDecorator={<Image src={"/social-logos/github.svg"} height={15} width={15} alt='' />}>
            Github
          </Button>
        </div>
      </div>
    </div>
  )
}