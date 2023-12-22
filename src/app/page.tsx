import React, { Fragment } from "react"
import Main from "./components/Main"
import SobreMim from "./components/SobreMim/SobreMim"
import Habilidades from "./components/Habilidades/Habilidades"
import Tecnologias from "./components/Tecnologias/Tecnologias"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "@/components/Footer/Footer"



const Home: React.FC = () => {
  return (
    <Fragment>
      <Main/>
      <SobreMim/>
      <Habilidades/>
      <Tecnologias/>
      <Portfolio/>
      <Footer/>
    </Fragment>
  )
}

export default Home
