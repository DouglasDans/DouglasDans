import Footer from '@/components/layout/footer'
import ModalTrigger from '@/components/layout/modal/trigger'
import NavbarWebspace from '@/components/layout/navbar-webspace'
import MainContainer from '@/containers/main-container'
import React, { Fragment, PropsWithChildren } from 'react'

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <Fragment>
      <ModalTrigger />
      <NavbarWebspace />
      <MainContainer>
        {children}
      </MainContainer>
      <Footer />
    </Fragment>
  )
}