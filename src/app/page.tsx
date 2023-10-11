import Habilidades from "@/components/Habilidades/Habilidades"
import Main from "@/components/Main"
import SobreMim from "@/components/SobreMim/SobreMim"
import React, { Fragment } from "react"

const Home: React.FC = () => {
  return (
    <Fragment>
      <Main/>
      <SobreMim/>
      <Habilidades/>
    </Fragment>
  )
}

export default Home
