import Banner from '@/containers/home/banner'
import Habilidades from '@/containers/home/habilidades'
import SobreMim from '@/containers/home/sobre-mim'
import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <SobreMim />
      <Habilidades />
    </Fragment>
  )
}