import React, { Fragment } from 'react'
import styles from './index.module.scss'

type Props = {
  text: string
}

export default function TitlePipe({ text }: Readonly<Props>) {
  return (
    <Fragment>{text}<b className={styles.slash}>_</b></Fragment>
  )
}