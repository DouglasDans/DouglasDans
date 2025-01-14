import React from 'react'
import './ProjectCard.css'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  id: Number,
  title: string,
  desc: string,
  tech: Array<Array<string>>,
  projectImage: string,
  projectLink: string,
  links: Array<Array<string>>
}

export default function ProjectCard({ projectLink, projectImage, title, links, desc, tech }: Props, key: Number) {
  return (
    <div className='card-container card-project'>
      <div className="img-card">
        <Link target="_blank" href={projectLink}>
          <div className='hover-link'>
            <button>
              <span className="material-symbols-rounded">open_in_new</span>
              <span className='open-in'>Abrir em uma nova guia</span>
            </button>
          </div>
          <img className='img' src={`/portfolio-img/${projectImage}`} alt="" />
        </Link>
      </div>
      <div className="card-project-content">
        <h3 className='title'>{title}</h3>
        <Link className='code-link' href={links[0][1]}>
          <button>
            <Github />
            Github
          </button>
        </Link>
        <p className='desc'>{desc}</p>
        <div className="tech-logos">
          {
            tech.map((item, index) => {
              return (
                <Image
                  key={index}
                  title={item[0]}
                  src={`/tech-logos/${item[1]}`}
                  height={25}
                  width={25}
                  alt={item[0]} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function Github() {
  return (
    <svg width="20" height="20" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_149_61)">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.9553 0C6.68541 0 0 6.875 0 15.3803C0 22.1791 4.28357 27.9341 10.226 29.9709C10.969 30.1241 11.2411 29.64 11.2411 29.2328C11.2411 28.8762 11.2166 27.6541 11.2166 26.3806C7.05643 27.2975 6.1901 24.5472 6.1901 24.5472C5.52153 22.7647 4.53092 22.3066 4.53092 22.3066C3.16929 21.3644 4.6301 21.3644 4.6301 21.3644C6.14051 21.4662 6.93306 22.9431 6.93306 22.9431C8.2699 25.2856 10.4241 24.6237 11.2907 24.2162C11.4144 23.2231 11.8108 22.5356 12.2317 22.1537C8.91367 21.7972 5.42265 20.4731 5.42265 14.5653C5.42265 12.8847 6.01653 11.5097 6.95755 10.4403C6.80908 10.0584 6.28898 8.47937 7.10633 6.36594C7.10633 6.36594 8.36908 5.95844 11.2163 7.94469C12.4353 7.60802 13.6925 7.43675 14.9553 7.43531C16.2181 7.43531 17.5053 7.61375 18.694 7.94469C21.5415 5.95844 22.8043 6.36594 22.8043 6.36594C23.6216 8.47937 23.1012 10.0584 22.9528 10.4403C23.9186 11.5097 24.488 12.8847 24.488 14.5653C24.488 20.4731 20.9969 21.7716 17.6541 22.1537C18.199 22.6375 18.6692 23.5541 18.6692 25.0056C18.6692 27.0681 18.6447 28.7234 18.6447 29.2325C18.6447 29.64 18.9171 30.1241 19.6598 29.9712C25.6022 27.9337 29.8858 22.1791 29.8858 15.3803C29.9103 6.875 23.2004 0 14.9553 0Z" />
      </g>
    </svg>

  )
}