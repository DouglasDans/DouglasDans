import Footer from '@/components/footer'
import NavbarWebspace from '@/components/navbar-webspace'
import MainContainer from '@/containers/main-container'
import React, { Fragment, PropsWithChildren } from 'react'

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <Fragment>
      <NavbarWebspace />
      <MainContainer>
        {children}
      </MainContainer>
      <Footer />
    </Fragment>
  )
}