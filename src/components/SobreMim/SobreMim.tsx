import React from 'react'
import  './SobreMim.css'

type Props = {}

export default function SobreMim({}: Props) {
   return (
      <section className='sobre-mim-container' id='sobre-mim'>
         <h2>Sobre mim<span className='font-blue-color'>_</span></h2>
         <p>
            Olá, eu sou o Douglas, sou desenvolvedor Fullstack e moro na Zona Leste de São Paulo 🙂
            <br/>
            Sou desenvolvedor FullStack, atualmente trabalhando em projetos pessoais e acadêmicos para praticar e melhorar minhas habilidades cada vez mais.
         </p>
      </section>
   )
}