import React from 'react'

import styles from './sobreMim.module.css'

type Props = {}

export default function SobreMim({ }: Props) {
   return (
      <section className={styles.container} id='sobre-mim'>
         <h2>Sobre mim<span className='font-blue-color'>_</span></h2>
         <p>
            Estudante de Desenvolvimento de Software, entusiasta e apaixonado por programação e tecnologia. Movido ao aprendizado contínuo e naturalmente curioso. Estou sempre disposto a me desafiar para criar soluções tecnológicas relevantes que ajudem as pessoas de alguma forma.
            <br />
            Atualmente focado em desenvolver minhas habilidades pessoais e profi ssionais e conquistar uma oportunidade na área de tecnologia.
         </p>
      </section>
   )
}