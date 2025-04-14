import SocialLinksWrapper from "@/components/social-links-wrapper";
import TitleDecorator from "@/components/title-decorator";
import styles from './index.module.scss'

export default function SobreMim() {
  return (
    <section className={styles.container}>
      <h2><TitleDecorator text="Sobre Mim" /></h2>

      <p className={styles.description}>
        Estudante de Desenvolvimento de Software, entusiasta e apaixonado por programação e tecnologia. Movido ao aprendizado contínuo e naturalmente curioso. Estou sempre disposto a me desafiar para criar soluções que ajudem empresas e pessoas utilizando tecnologia. Atualmente focado em desenvolver minhas habilidades pessoais e profissionais e conquistar uma oportunidade na área de tecnologia.
      </p>

      <SocialLinksWrapper />
    </section>
  )
}