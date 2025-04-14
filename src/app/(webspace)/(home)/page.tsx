import Banner from '@/components/home/banner'
import Habilidades from '@/components/home/habilidades'
import SobreMim from '@/components/home/sobre-mim'
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