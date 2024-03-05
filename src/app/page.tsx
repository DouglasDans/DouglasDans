import React, { Fragment } from "react"
import SobreMim from "@/components/home/SobreMim/SobreMim";
import Habilidades from "@/components/home/Habilidades/Habilidades";
import Tecnologias from "@/components/home/Tecnologias/Tecnologias";
import Footer from "@/components/ui/Footer/Footer";
import Main from "../components/home/Main";
import Portfolio from "@/components/home/Portfolio/Portfolio";

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
