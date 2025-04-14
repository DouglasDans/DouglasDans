import Banner from '@/components/home/banner'
import SobreMim from '@/components/home/sobre-mim'
import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <SobreMim />
    </Fragment>
  )
}