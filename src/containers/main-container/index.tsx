import React, { PropsWithChildren } from 'react'
import styles from './index.module.scss'

export default function MainContainer({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}