import React, { Fragment } from 'react'

import ProjectsContainer from '../../components/projects/ProjectsContainer'
import Footer from '@/components/ui/Footer/Footer'
import Container from '@/components/projects/Container/Container'

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