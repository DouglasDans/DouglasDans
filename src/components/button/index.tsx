import { ReactNode } from 'react'
import styles from './index.module.scss'

type Props = {
  size?: 'md' | 'sm'
  startDecorator?: string
  children: ReactNode
}

export default function Button({ size = 'md', startDecorator, children }: Readonly<Props>) {
  return (
    <button className={`
      ${styles.button}
      ${styles[size]}
    `}>
      {startDecorator}
      {children}
    </button>
  )
}