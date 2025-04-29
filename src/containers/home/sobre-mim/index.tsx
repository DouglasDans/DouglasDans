import SocialLinksWrapper from "@/components/social-links-wrapper";
import TitlePipe from "@/components/title-pipe";
import styles from './index.module.scss'
import { MDXRemote } from 'next-mdx-remote/rsc'
import mdStyle from '@/styles/style-modules/markdown.module.scss'

const sobreMimText = `
Sou um desenvolvedor web fullstack em formação, com foco em **TypeScript** e **React**, atualmente expandindo meus conhecimentos no desenvolvimento **back-end com Java e Spring Boot**.

Sou apaixonado por tecnologia e por usá-la como ferramenta para **criar soluções que gerem valor real para as pessoas**. Acredito que esse é o meu principal propósito como profissional: **transformar ideias em experiências funcionais e impactantes, que ajudem as pessoas no seu dia a dia**.

Tenho um perfil **autodidata** e **curioso por natureza**, sempre motivado a aprender novas tecnologias, explorar diferentes abordagens e aprofundar meus conhecimentos nos fundamentos da programação. Gosto de entender não apenas o *como*, mas principalmente o *porquê* das coisas — isso me ajuda a desenvolver um repertório sólido para resolver problemas complexos de forma criativa e eficiente.

Além da tecnologia, também me interesso por **psicologia e filosofia**, áreas que acredito complementarem meu desenvolvimento pessoal e minha forma de pensar o mundo, o trabalho e as relações humanas. Acredito na importância de entender como outras áreas além da tecnologia funcionam, isso desperta a minha curiosidade e também fortalece o meu repertório profissional.

Atualmente, estou focado em desenvolver projetos **escaláveis, robustos e organizados com código limpo**, com atenção especial à **experiência do usuário final** e à **manutenibilidade do sistema**.

`

export default function SobreMim() {
  return (
    <section id="sobre-mim" className={styles.container}>
      <h2><TitlePipe text="Sobre Mim" /></h2>

      <div className={mdStyle.markdown}>
        <MDXRemote source={sobreMimText} />
      </div>

      <SocialLinksWrapper />
    </section>
  )
}