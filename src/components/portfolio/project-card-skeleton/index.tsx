import Skeleton from '@/components/ui/skeleton'
import styles from './index.module.scss'

export default function ProjectCardSkeleton() {
  return (
    <div className={styles.card}>
      {/* Skeleton da imagem de capa */}
      <Skeleton
        width="100%"
        height="250px"
        borderRadius="10px 10px 0 0"
        className={styles.coverSkeleton}
      />

      <div className={styles.content}>
        {/* Skeleton do título */}
        <Skeleton
          width="80%"
          height="24px"
          borderRadius="4px"
        />

        {/* Skeleton da descrição */}
        <div className={styles.descriptionSkeleton}>
          <Skeleton
            width="100%"
            height="16px"
            borderRadius="4px"
          />
          <Skeleton
            width="90%"
            height="16px"
            borderRadius="4px"
          />
          <Skeleton
            width="70%"
            height="16px"
            borderRadius="4px"
          />
        </div>

        {/* Skeleton dos botões */}
        <div className={styles.buttonsSkeleton}>
          <Skeleton
            width="120px"
            height="32px"
            borderRadius="10px"
          />
          <Skeleton
            width="80px"
            height="32px"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  )
}
