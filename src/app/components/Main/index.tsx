import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Container from '@/components/Container/Container'

export default function Main() {
   return (
      <Container>
         <Header/>
         <Banner/>
      </Container>
   )
}