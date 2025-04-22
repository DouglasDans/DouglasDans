'use client'

import styles from './index.module.scss'
import { useEffect, useState } from 'react';
import { NotionPage } from '@/services/notion/classes/NotionPage';
import { getPageDetails } from '@/actions/portfolio.actions';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Button from '../button';
import { useRouter } from 'next/navigation';
import TechnologyTag from '../tecnology-tag';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';

type Props = {
  projectId: string
}

export default function Modal({ projectId }: Readonly<Props>) {
  const [page, setPage] = useState<NotionPage>();
  const router = useRouter();

  useEffect(() => {
    async function getDetails() {
      setPage(await getPageDetails(projectId));
    }
    getDetails();
  }, []);

  function closeModal() {
    const currentPath = window.location.pathname;
    router.replace(currentPath, { scroll: false });
  };

  if (!page) {
    return null
  }

  return (
    <div className={styles.container} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <button className={styles.closeButton} onClick={closeModal}>
          <span className='material-symbols-rounded'>close</span>
        </button>

        {page.banner && <Image
          src={page.banner}
          width={1280}
          height={720}
          alt=''
          className={styles.image}
        />}

        <div className={styles.content}>
          <div className={styles.header}>
            <h1>{page.name}</h1>

            <div className={styles.buttonsWrapper}>
              {page.github_link && <Link href={page?.github_link} target="_blank">
                <Button
                  startDecorator={<Image src={"/social-logos/github.svg"} height={20} width={20} alt='github logo' />}>
                  Github
                </Button>
              </Link>}
              {page.accessLink && <Link href={page?.accessLink} target="_blank">
                <Button
                  startDecorator={<span className='material-symbols-rounded'>open_in_new</span>}
                >Acessar</Button>
              </Link>}
            </div>
          </div>

          <div className={styles.text}>
            {page.markdownContent
              ? <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw]}>
                {page.markdownContent}
              </ReactMarkdown>
              : <p>{page.description}</p>}
          </div>

          {page.tecnologies && <TechnologyTag values={page?.tecnologies} />}
        </div>
      </div>
    </div>
  )
}