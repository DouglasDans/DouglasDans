import Image from 'next/image'
import ImageWithTransition from '../image-with-transition'
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
      <ImageWithTransition
        className={styles.coverImage}
        src={content.banner || "/portfolio-img/placeholder.png"}
        width={640}
        height={360}
        alt=''
        quality={80}
        priority={true}
      />

      <div className={styles.content}>
        <h3>{content.name}</h3>

        <small className={styles.description}>
          {content.description}
        </small>

        <div className={styles.buttonWrapper}>
          <Link href={`?modal=true&project-id=${content.id}`} scroll={false}>
            <Button size='sm'>Mais Informações</Button>
          </Link>

          {content.github_link &&
            <Link href={content.github_link} target="_blank">
              <Button
                size='sm'
                startDecorator={<Image src={"/social-logos/github.svg"} height={15} width={15} alt='' />}
              >
                Github
              </Button>
            </Link>}
        </div>
      </div>
    </div>
  )
}