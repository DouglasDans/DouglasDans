import Habilidades from "@/components/Habilidades/Habilidades"
import Main from "@/components/Main"
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
    </Fragment>
  )
}

export default Home
