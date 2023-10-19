import React from 'react'
import './style.css'

interface Props {
   children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
   return (
      <section className='main-container'>
         {children}
      </section>
   )
}

export default Container