import Habilidades from "@/components/Habilidades/Habilidades"
import Main from "@/components/Main"
import Portfolio from "@/components/Portfolio/Portfolio"
import SobreMim from "@/components/SobreMim/SobreMim"
import Tecnologias from "@/components/Tecnologias/Tecnologias"
import React, { Fragment } from "react"

const Home: React.FC = () => {
  return (
    <Fragment>
      <Main/>
      <SobreMim/>
      <Habilidades/>
      <Tecnologias/>
      <Portfolio/>
    </Fragment>
  )
}

export default Home
