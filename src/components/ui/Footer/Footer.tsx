import React from 'react'
import './Footer.css'
import Link from 'next/link'
import ButtonLinks from '@/components/ui/ButtonLinks/ButtonLinks'
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks'

type Props = {}

export default function Footer({}: Props) {
   return (
      <footer className='footer-container'>
         <h3 className='title-name'><span className='font-blue-color'>{">>"}</span> Douglas Nascimento<span className='font-blue-color'>_</span></h3>

         <nav className="footer-nav-links">
            <Link href="/public#">
               <h5>Voltar ao topo</h5>
            </Link>
            <Link href="/public#habilidades">
               <h5>Minhas Habilidades</h5>
            </Link>
            <Link href="/public#tecnologias">
               <h5>Minhas Tecnologias</h5>
            </Link>
            <Link href="/public#portfolio">
               <h5>Meu Portfolio</h5>
            </Link>
         </nav>

         <div className="footer-right">
            <ButtonLinks flexColumn={true}/>
            <SocialLinks/>
         </div>
      </footer>
   )
}