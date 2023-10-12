import React from 'react'
import  './SobreMim.css'

type Props = {}

export default function SobreMim({}: Props) {
   return (
      <section className='sobre-mim-container' id='sobre-mim'>
         <h2>Sobre mim<span className='font-blue-color'>_</span></h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lorem quam. Ut lacinia dapibus orci, non gravida massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dui quam, suscipit vitae interdum sed, mattis vitae arcu.</p>
      </section>
   )
}