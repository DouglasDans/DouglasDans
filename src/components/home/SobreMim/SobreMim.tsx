import React from 'react'

import styles from './sobreMim.module.css'

type Props = {}

export default function SobreMim({}: Props) {
   return (
      <section className={styles.container} id='sobre-mim'>
         <h2>Sobre mim<span className='font-blue-color'>_</span></h2>
         <p>
            Trabalho ativamente no meu crescimento profissional, por meio de projetos e estudos onde posso praticar todo o meu conhecimento. Mas também trabalho no meu desenvolvimento pessoal, lendo livros e assistindo a vídeos inspiradores que possam me tornar um ser humano melhor. Sempre estarei aberto a adquirir novos conhecimentos e experiências e a conhecer novos pontos de vista.
         </p>
      </section>
   )
}