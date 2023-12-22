import React, { Fragment } from 'react'

import ProjectsContainer from './components/ProjectsContainer'
import Footer from '@/components/Footer/Footer'
import Container from './components/Container/Container'

type Props = {}

export default function page({}: Props) {
   return (
      <Fragment>
         <Container>
            {/* <Header/> */}
            <ProjectsContainer/>
         </Container>
         <Footer/>
      </Fragment>
   )
}