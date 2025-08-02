import Image from "next/image"
import { useState } from "react"
import styles from './index.module.scss'

type Props = {
  values: string[]
}

export default function TechnologyTag({ values }: Props) {
  return (
    <div className={styles.container}>
      {values.map((value, index) => {
        const [imageError, setImageError] = useState(false);

        return (
          <small className={styles.tag} key={index}>
            {!imageError && (
              <Image
                src={`/tech-logos/${value.toLowerCase()}.svg`}
                height={15}
                width={15}
                alt={`${value} tech logo`}
                onError={() => setImageError(true)}
              />
            )}
            {value}
          </small>
        )
      })}
    </div>
  )
}