import React, { ReactNode } from 'react'
import styles from './index.module.scss'

type Props = {
  color?: string
  children: ReactNode
}

export default function SocialButton({ color, children }: Readonly<Props>) {
  return (
    <button className={styles.button} style={{ backgroundColor: color }}>
      <div>
        {children}
      </div>
    </button >
  )
}