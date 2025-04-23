import { ReactNode } from 'react'
import styles from './index.module.scss'

type Props = {
  size?: 'md' | 'sm'
  startDecorator?: ReactNode
  children: ReactNode
  className?: string
}

export default function Button({ size = 'md', startDecorator, children, className }: Readonly<Props>) {
  return (
    <button className={`
      ${styles.button}
      ${styles[size]}
      ${className}
    `}>
      {startDecorator}
      {children}
    </button>
  )
}