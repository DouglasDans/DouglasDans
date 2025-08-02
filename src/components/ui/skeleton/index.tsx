import styles from './index.module.scss'

type SkeletonProps = {
  width?: string
  height?: string
  borderRadius?: string
  className?: string
}

export default function Skeleton({ 
  width = '100%', 
  height = '20px', 
  borderRadius = '4px',
  className = ''
}: SkeletonProps) {
  return (
    <div 
      className={`${styles.skeleton} ${className}`}
      style={{
        width,
        height,
        borderRadius
      }}
    />
  )
}
