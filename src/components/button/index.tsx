import { ReactNode, MouseEventHandler } from 'react'
import styles from './index.module.scss'

type Props = {
  size?: 'md' | 'sm'
  startDecorator?: ReactNode
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ size = 'md', startDecorator, children, className, onClick }: Readonly<Props>) {
  return (
    <button
      className={`
        ${styles.button}
        ${styles[size]}
        ${className}
      `}
      onClick={onClick}
    >
      {startDecorator}
      {children}
    </button>
  )
}