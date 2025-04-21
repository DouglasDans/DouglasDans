import Image from "next/image"
import styles from './index.module.scss'

type Props = {
  values: string[]
}

export default function TechnologyTag({ values }: Readonly<Props>) {
  return (
    <div className={styles.container}>
      {values.map((value, index) => {
        return (
          <small className={styles.tag} key={index}>
            <Image
              src={`/tech-logos/${value.toLowerCase()}.svg`}
              height={15}
              width={15}
              alt={`${value} tech logo`}
            />
            {value}
          </small>
        )
      })}
    </div>
  )
}