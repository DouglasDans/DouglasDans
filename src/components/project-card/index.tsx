
import Image from 'next/image'
import styles from './index.module.scss'
import Button from '../button'
import { NotionPageData } from '@/services/notion/classes/NotionPage'
import Link from 'next/link'

type Props = {
  content: NotionPageData
}

export default function ProjectCard({ content }: Readonly<Props>) {
  return (
    <div className={styles.card}>
      <img
        className={styles.coverImage}
        src={content.banner || "/portfolio-img/placeholder.png"}
        width={640}
        height={360}
        alt=''
      />

      <div className={styles.content}>
        <h3>{content.name}</h3>

        <small className={styles.description}>
          {content.description}
        </small>

        <div className={styles.buttonWrapper}>
          <Button size='sm'>Mais Informações</Button>

          {content.github_link &&
            <Link href={content.github_link}>
              <Button
                size='sm'
                startDecorator={<Image src={"/social-logos/github.svg"} height={15} width={15} alt='' />}>
                Github
              </Button>
            </Link>}
        </div>
      </div>
    </div>
  )
}