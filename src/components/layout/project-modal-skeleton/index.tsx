import Skeleton from '@/components/ui/skeleton'
import styles from './index.module.scss'

export default function ProjectModalSkeleton() {
  return (
    <div className={styles.modal}>
      {/* Skeleton do botão de fechar */}
      <div className={styles.closeButton}>
        <Skeleton
          width="40px"
          height="40px"
          borderRadius="8px"
        />
      </div>

      {/* Skeleton da imagem banner */}
      <Skeleton
        width="100%"
        height="300px"
        borderRadius="20px 20px 0 0"
        className={styles.bannerSkeleton}
      />

      <div className={styles.content}>
        {/* Skeleton do header */}
        <div className={styles.header}>
          {/* Skeleton do título */}
          <Skeleton
            width="60%"
            height="36px"
            borderRadius="6px"
            className={styles.titleSkeleton}
          />

          {/* Skeleton dos botões */}
          <div className={styles.buttonsSkeleton}>
            <Skeleton
              width="120px"
              height="40px"
              borderRadius="12px"
            />
            <Skeleton
              width="100px"
              height="40px"
              borderRadius="12px"
            />
          </div>
        </div>

        {/* Skeleton do conteúdo markdown */}
        <div className={styles.markdownSkeleton}>
          <Skeleton
            width="100%"
            height="20px"
            borderRadius="4px"
          />
          <Skeleton
            width="95%"
            height="20px"
            borderRadius="4px"
          />
          <Skeleton
            width="88%"
            height="20px"
            borderRadius="4px"
          />
          <Skeleton
            width="92%"
            height="20px"
            borderRadius="4px"
          />
          <Skeleton
            width="85%"
            height="20px"
            borderRadius="4px"
          />
          <Skeleton
            width="90%"
            height="20px"
            borderRadius="4px"
          />
          <Skeleton
            width="75%"
            height="20px"
            borderRadius="4px"
          />
        </div>

        {/* Skeleton das tecnologias */}
        <div className={styles.technologiesSkeleton}>
          <Skeleton
            width="80px"
            height="28px"
            borderRadius="14px"
          />
          <Skeleton
            width="100px"
            height="28px"
            borderRadius="14px"
          />
          <Skeleton
            width="90px"
            height="28px"
            borderRadius="14px"
          />
          <Skeleton
            width="110px"
            height="28px"
            borderRadius="14px"
          />
          <Skeleton
            width="70px"
            height="28px"
            borderRadius="14px"
          />
        </div>
      </div>
    </div>
  )
}
