import Link from "next/link"
import SocialButton from "./social-button"
import Image from "next/image"
import styles from './index.module.scss'

export default function SocialLinksWrapper() {
  return (
    <div className={styles.wrapper}>
      <Link href={"https://discord.com/users/684092812312313927"} target="_blank">
        <SocialButton color="#5865F2" >
          <Image
            src={"/social-logos/discord.svg"}
            height={20}
            width={20}
            alt="Discord Link"
          />
        </SocialButton>
      </Link>

      <Link href={"https://github.com/DouglasDans"} target="_blank">
        <SocialButton color="#24292e" >
          <Image
            src={"/social-logos/github.svg"}
            height={20}
            width={20}
            alt="Github Link"
          />
        </SocialButton>
      </Link>

      <Link href={"https://www.linkedin.com/in/douglasdans/"} target="_blank">
        <SocialButton color="#0077b5" >
          <Image
            src={"/social-logos/linkedin.svg"}
            height={20}
            width={20}
            alt="LinkedIn Link"
          />
        </SocialButton>
      </Link>
    </div>
  )
}