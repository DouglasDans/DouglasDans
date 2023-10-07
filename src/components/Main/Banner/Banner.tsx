import React from 'react'
import './Banner.css'
import Image from 'next/image'
import SocialLinks from '@/components/Global/SocialLinks/SocialLinks'

type Props = {}

export default function Banner({}: Props) {
  return (
    <div className='banner-container'>
      <div className="info-banner">

        <div className="title">
          <h1>Olá! eu sou o Douglas</h1>
          <h1>Desenvolvedor Fullstack_</h1>
        </div>

        <SocialLinks/>

        aaaa
      </div>
      <Image alt='' src={""} height={100} width={100}/>
    </div>
  )
}