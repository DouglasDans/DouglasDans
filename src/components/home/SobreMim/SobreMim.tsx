import React from 'react'

import styles from './sobreMim.module.css'

type Props = {}

export default function SobreMim({}: Props) {
   return (
      <section className={styles.container} id='sobre-mim'>
         <h2>Sobre mim<span className='font-blue-color'>_</span></h2>
         <p>
            Desde 2019, tenho me dedicado ao estudo e aprimoramento para me tornar um desenvolvedor, expandindo minhas habilidades em frontend e backend. <br/> Ao longo desse período, desenvolvi diversos projetos para enriquecer minha experiência teórica e prática. Atualmente, estou disponível para contratação e também para projetos freelancer, ansioso para aplicar todo o conhecimento adquirido ao longo desses anos e alcançar ainda mais na minha jornada profissional.
         </p>
      </section>
   )
}