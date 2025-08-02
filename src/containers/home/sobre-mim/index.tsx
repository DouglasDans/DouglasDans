import SocialLinksWrapper from "@/components/layout/social-links-wrapper";
import TitlePipe from "@/components/ui/title-pipe";
import styles from './index.module.scss'
import { MDXRemote } from 'next-mdx-remote/rsc'
import mdStyle from '@/styles/style-modules/markdown.module.scss'

const sobreMimText = `
Sou apaixonado por tecnologia e por usá-la como ferramenta para **criar soluções que gerem valor real para as pessoas**. Acredito que esse é o meu principal propósito como profissional: **transformar ideias em experiências funcionais e impactantes, que ajudem as pessoas no seu dia a dia**.

Tenho um perfil **autodidata** e **curioso por natureza**, sempre motivado a aprender novas tecnologias, explorar diferentes abordagens e aprofundar meus conhecimentos nos fundamentos da programação. Gosto de entender não apenas o *como*, mas principalmente o *porquê* das coisas — isso me ajuda a desenvolver um repertório sólido para resolver problemas complexos de forma criativa e eficiente.

Atualmente, estou focado em desenvolver meus projetos, crescer como profissional no mercado de trabalho, sempre aprender algo novo (nem sempre somente relacionado a tecnologia, mas sim também sobre como me desenvolver como pessoa), entender melhor as tendências da área, e continuar seguindo o meu caminho para alcançar meus objetivos.

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